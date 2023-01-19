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
import LoadingData from "@components/data/loading-data";
import Footer from "@components/footer/footer";

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
  const [myCoords, setMyCoords] = useState<any>();
  const [fetched, setFetched] = useState(false);
  const [heroDataIn, setHeroDataIn] = useState<boolean>(false);

  const [dayData, setDayData] = useState([]);

  const now = forecastState.view === "now";
  const today = forecastState.view === "today";
  const week = forecastState.view === "week";
  const day = forecastState.view === "day";

  const currentForecastView = today ? hourly : daily;

  const printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();

    if (coordinates) {
      setMyCoords(coordinates.coords);
      setFetched(true);
    }
  };

  useEffect(() => {
    printCurrentPosition();

    if (myCoords) {
      fetchOnecall(myCoords).then((data) => {
        setHourly(data.hourly);
        setDaily(data.daily);
        setCurrentDate(data.current.data);
        setCurrentTemp(data.current.temp);
        setCurrentIcon(data.current.weather[0].icon);
        setCurrentDescription(data.current.weather[0].description);
      });

      fetchWeather(myCoords).then((data) => {
        setMyLocation(data.name);
        setNowData(data);
      });

      setIsLoading(false);
    }
  }, [fetched]);

  console.log("isNow", now);
  console.log("currentTemp", currentTemp);

  return (
    <>
      {!isLoading && (
        <>
          <section>
            <Hero
              data={currentForecastView}
              icon={currentIcon}
              temp={currentTemp}
              isNow={now}
              dayData={now ? nowData : dayData}
              location={myLocation}
              description={currentDescription}
              heroDataIn={heroDataIn}
              singleView={singleView}
              setHeroDataIn={setHeroDataIn}
              coords={myCoords}
            />
            <ForecastNav
              singleView={singleView}
              setSingleView={setSingleView}
              heroDataIn={heroDataIn}
              setHeroDataIn={setHeroDataIn}
            />
            {now && <ForecastNow data={nowData} rightNow />}
            {(today || week) && (
              <Forecast
                data={currentForecastView}
                dayData={dayData}
                setDayData={setDayData}
                singleView={singleView}
                setSingleView={setSingleView}
              />
            )}
          </section>

          <Footer />
        </>
      )}

      {isLoading && <LoadingData />}
    </>
  );
}
