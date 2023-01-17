import { Container } from "@components/container/container";
import { Button } from "@components/ui/button";
import { searchOutline } from "ionicons/icons";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import updateLocale from "dayjs/plugin/updateLocale";
import { useState } from "react";
import axios from "axios";
import RowForecast from "@components/forecast/row-forecast";
import cn from "clsx";
import Hero from "@components/hero/hero";
import type { KeyboardEvent } from "react";

export default function Search(): JSX.Element {
  dayjs.extend(utc);
  dayjs.extend(updateLocale);
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const [currentTemp, setCurrentTemp] = useState(0);

  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState<string>("");
  const [currentIcon, setCurrentIcon] = useState<string>("");
  const [currentDescription, setCurrentDescription] = useState<string>("");

  const dataIn = data.length > 0;

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result: string = e.target.value;
    setInputValue(result);
  };

  const handleSubmit = async () => {
    const result: string = inputValue.trim();

    if (result !== "" && !isLoading) {
      setIsLoading(true);
      setIsError(false);

      try {
        const { data } = await axios({
          method: "get",
          url: "https://api.openweathermap.org/data/2.5/forecast",
          params: {
            q: result,
            units: "metric",
            lang: "da",
            cnt: "5",
            mode: "json",
            appid: "48f427056d4654fc05c05c1e61a36c47",
          },
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("data search", data);
        setData(data.list);
        setCurrentTemp(data.list[0].main.temp);
        setSearchName(data.city.name);
        setCurrentIcon(data.list[0].weather[0].icon);
        setCurrentDescription(data.list[0].weather[0].description);

        setInputValue("");
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
    }
  };

  return (
    <main>
      {dataIn && (
        <Hero
          temp={currentTemp}
          icon={currentIcon}
          location={searchName}
          isSearch={true}
          heroDataIn={false}
          description={currentDescription}
          setHeroDataIn={() => {}}
        />
      )}

      <div
        className={cn(
          "bg-main-black",
          dataIn ? "rounded-b-xl py-1" : "m-2 rounded-md py-3"
        )}
      >
        <div className="flex items-center gap-1 py-2 px-3">
          <div className="w-full">
            <input
              type="text"
              className="h-8 w-full rounded-md border border-gray-300 bg-main-black px-2 text-sm text-white outline-none"
              value={inputValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Søg efter en by..."
            />
          </div>
          <div className="flex w-10 justify-center pt-1">
            <Button className="text-xl text-white" onClick={handleSubmit}>
              <ion-icon icon={searchOutline} />
            </Button>
          </div>
        </div>
      </div>
      {dataIn && (
        <Container className="m-2 pb-3 text-center text-white">
          <div className="bottom-container overflow-y-scroll scrollbar-hide">
            <div className="mb-1.5 pt-0.5">
              <RowForecast data={data[0]} heading />
            </div>
            {data.slice(0, 12).map((d, i) => {
              return <RowForecast key={i} data={d} />;
            })}
          </div>
        </Container>
      )}
    </main>
  );
}
