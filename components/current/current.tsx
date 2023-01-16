import { useState, useEffect } from "react";
import Forecast from "@components/forecast/forecast";
import Hero from "@components/hero/hero";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import updateLocale from "dayjs/plugin/updateLocale";
import { useGeolocated } from "react-geolocated";
import { fetchOnecall, fetchWeather } from "@lib/helpers/fetch-openweather";
import ForecastNav from "@components/navigation/forecast";
import { useRecoilState } from "recoil";
import { ForecastState } from "@lib/states/forecast";
import ForecastNow from "@components/forecast/now-forecast";
import { Geolocation } from "@capacitor/geolocation";

export default function CurrentLocation(): JSX.Element {
  dayjs.extend(utc);
  dayjs.extend(updateLocale);
  const [forecastState, setForecastState] = useRecoilState(ForecastState);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [singleView, setSingleView] = useState(false);

  const [currentTemp, setCurrentTemp] = useState(0);
  const [currentMaxTemp, setCurrentMaxTemp] = useState<string>("");
  const [currentMinTemp, setCurrentMinTemp] = useState<string>("");
  const [currentIcon, setCurrentIcon] = useState<string>("");

  const [currentDate, setCurrentDate] = useState(0);
  const [currentDescription, setCurrentDescription] = useState<string>("");
  const [myLocation, setMyLocation] = useState<string>("");
  const [landscape, setLandscape] = useState<string>("");
  const [daily, setDaily] = useState([]);
  const [hourly, setHourly] = useState([]);
  const [nowData, setNowData] = useState([]);
  const [viewType, setViewType] = useState<string>("");
  const [myCoords, setMyCoords] = useState<any>();
  const [fetched, setFetched] = useState(false);

  const now = forecastState.view === "now";
  const today = forecastState.view === "today";
  const week = forecastState.view === "week";
  const day = forecastState.view === "day";

  const currentForecastView = today ? hourly : daily;

  const printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();

    if (coordinates) {
      setMyCoords(coordinates.coords);
      console.log("myCoords", myCoords);
      setFetched(true);
    }
  };

  useEffect(() => {
    printCurrentPosition();

    if (myCoords) {
      fetchOnecall(myCoords).then((data) => {
        console.log("data-Onecall", data);
        setHourly(data.hourly);
        setDaily(data.daily);
        setCurrentDate(data.current.data);
        setCurrentTemp(data.current.temp);
        setCurrentIcon(data.current.weather[0].icon);
        setCurrentDescription(data.current.weather[0].description);
      });

      fetchWeather(myCoords).then((data) => {
        console.log("data-weather", data);
        setMyLocation(data.name);
        setNowData(data);
      });

      setIsLoading(false);
    }
  }, [fetched]);

  return (
    <div>
      {!isLoading && (
        <>
          <Hero
            dt={currentDate}
            icon={currentIcon}
            temp={currentTemp}
            minTemp={currentMinTemp}
            maxTemp={currentMaxTemp}
            myLocation={myLocation}
            description={currentDescription}
            coords={myCoords}
          />
          <ForecastNav singleView={singleView} setSingleView={setSingleView} />
          {now && <ForecastNow data={nowData} rightNow />}
          {(today || week) && (
            <Forecast
              data={currentForecastView}
              singleView={singleView}
              setSingleView={setSingleView}
            />
          )}
        </>
      )}
    </div>
  );
}
