import { Button } from "@components/ui/button";
import { HeroIcon } from "@components/ui/hero-icon";
import { ForecastState } from "@lib/states/forecast";
import { SettingsState } from "@lib/states/settings-state";
import dayjs from "dayjs";
import Locale from "dayjs/locale/da";
import { location as IonLocation } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

type HeroProps = {
  data: any;
  temp: number;
  icon?: string;
  isNow?: boolean;
  coords?: any;
  dayData?: any;
  location?: string;
  isSearch?: boolean;
  heroDataIn: boolean;
  singleView?: boolean;
  description?: string;
  setHeroDataIn: (heroDataIn: boolean) => void;
};

export default function Hero(props: HeroProps): JSX.Element {
  const showCoords = useRecoilValue(SettingsState);
  const date = dayjs().locale(Locale).format("DD/MMMM");
  const dateToday = date.replace("/", " ");
  const dayName = dayjs().locale(Locale).format("dddd");
  const forecastState = useRecoilValue(ForecastState);
  const [landscape, setLandscape] = useState<string>("");

  const showMyCoords = showCoords.showCoords;

  const data = props.isSearch ? props.data : props.data[0];
  const icon = props.icon;
  const isNow = props.isNow;
  const dayData = props.dayData;
  const location = props.location;
  const isSearch = props.isSearch;
  const heroDataIn = props.heroDataIn;
  const singleView = props.singleView;
  const description = props.description;
  const setHeroDataIn = props.setHeroDataIn;

  const now = forecastState.view === "now";
  const today = forecastState.view === "today";
  const week = forecastState.view === "week";

  const temp =
    now && !isSearch
      ? dayData?.main?.temp
      : today && !isSearch && !singleView
      ? data?.temp
      : today && !isSearch && singleView
      ? dayData?.temp
      : week && !isSearch
      ? data?.temp?.day
      : week && !isSearch && !singleView
      ? dayData?.temp.day
      : isSearch
      ? data[0].main.temp
      : props?.temp;

  const time = singleView
    ? dayData.dt
    : isNow
    ? dayData.dt
    : isSearch
    ? data[0].dt
    : data?.dt;

  console.log("tempp", temp);
  console.log("dayData", dayData);
  console.log("data", data);

  const earlierMorning =
    dayjs.unix(time).hour() >= 4 && dayjs.unix(time).hour() < 7;
  const isMorning =
    dayjs.unix(time).hour() >= 7 && dayjs.unix(time).hour() < 11;
  const isNoon = dayjs.unix(time).hour() >= 11 && dayjs.unix(time).hour() < 14;
  const isAfternoon =
    dayjs.unix(time).hour() >= 14 && dayjs.unix(time).hour() < 16;
  const isSunset =
    dayjs.unix(time).hour() >= 16 && dayjs.unix(time).hour() < 19;
  const isEvening =
    dayjs.unix(time).hour() >= 19 && dayjs.unix(time).hour() < 21;
  const isNight = dayjs.unix(time).hour() >= 21 && dayjs.unix(time).hour() < 24;
  const lateNight = dayjs.unix(time).hour() >= 1 && dayjs.unix(time).hour() < 4;

  useEffect(() => {
    if (!isSearch && Object.keys(dayData).length > 0) {
      setHeroDataIn(true);
    } else {
      setHeroDataIn(false);
    }
  }, [dayData]);

  useEffect(() => {
    if (time) {
      if (earlierMorning) {
        setLandscape("earlier-morning");
      }
      if (isMorning) {
        setLandscape("morning");
      }
      if (isNoon) {
        setLandscape("noon");
      }
      if (isAfternoon) {
        setLandscape("afternoon");
      }
      if (isSunset) {
        setLandscape("sunset");
      }
      if (isEvening) {
        setLandscape("evening");
      }
      if (isNight) {
        setLandscape("night");
      }
      if (lateNight) {
        setLandscape("night");
      }
    }
  }, [time, dayData]);

  return (
    <>
      {data && (
        <div className="relative max-h-[43vh]">
          <div className="h-[43vh]">
            {time && (
              <video
                src={`/assets/videos/${landscape}.mp4`}
                autoPlay
                loop
                muted
                className="h-[43vh] w-full object-cover"
              />
            )}
          </div>
          <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-end">
            <div className="hero-overlay w-[38%]" />
          </div>
          <div>
            <h2 className="gilroy-light absolute top-0 left-5 text-lg font-semibold capitalize text-white">
              {heroDataIn ? (
                <>
                  {now && (
                    <>
                      {dayjs.unix(dayData.dt).format("HH:mm")} -{" "}
                      <span className="font-normal normal-case">Lige nu</span>
                    </>
                  )}
                  {today && (
                    <>
                      {dayjs.unix(dayData.dt).format("HH:mm")} -{" "}
                      <span className="font-normal normal-case">I dag</span>
                    </>
                  )}
                  {week && (
                    <>
                      {dayjs.unix(dayData.dt).format("DD/MM")} -{" "}
                      <span className="font-normal">
                        {dayjs.unix(dayData.dt).locale(Locale).format("dddd")}
                      </span>
                    </>
                  )}
                </>
              ) : isSearch ? (
                <>{dayjs.unix(data[0].dt).locale(Locale).format("DD MMMM")}</>
              ) : (
                <>
                  {dayjs.unix(data.dt).locale(Locale).format("DD MMMM")} -{" "}
                  <span className="font-normal">
                    {dayjs.unix(data.dt).locale(Locale).format("dddd")}
                  </span>
                </>
              )}
            </h2>
          </div>
          <div className="absolute top-10 right-0 space-y-3 text-right text-white">
            <div className="flex justify-center pl-5">
              <div>
                <div className="h-14 w-14">
                  {icon && (
                    <ion-img src={`/assets/icons/${icon}.svg`} alt="OWM" />
                  )}
                </div>
                <p className="text-center text-base font-semibold">
                  {description}
                </p>
              </div>
            </div>

            <div className="px-7">
              <p className="text-5xl font-extrabold">{Math.round(temp)}°</p>
            </div>
            <div className="flex justify-end  gap-1 px-4">
              <p className="text-xl font-bold">
                <ion-icon icon={IonLocation} />
              </p>
              <p className="text-sm font-medium">{location}</p>
            </div>
          </div>
          <div className="absolute bottom-4 left-2 px-4 text-white">
            {showMyCoords && (
              <>
                {props.coords && (
                  <div>
                    <p>
                      {props.coords.latitude}&#10240;
                      {props.coords.longitude}
                    </p>
                  </div>
                )}
              </>
            )}
            {/*             <Button className="flex items-center gap-1 text-white">
              Se mere
              <HeroIcon iconName="ArrowUpRightIcon" className="h-4 w-4" />
            </Button> */}
          </div>
        </div>
      )}
    </>
  );
}
