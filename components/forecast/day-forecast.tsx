import { Container } from "@components/container/container";
import { CustomIcon } from "@components/ui/custom-icon";
import { ForecastState } from "@lib/states/forecast";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useRecoilValue } from "recoil";
import cn from "clsx";

type DayForecastProps = {
  data: any;
  singleView?: boolean;
  rightNow?: boolean;
};

export default function DayForecast(props: DayForecastProps): JSX.Element {
  dayjs.extend(utc);
  const forecastState = useRecoilValue(ForecastState);

  const today = forecastState.view === "today";
  const week = forecastState.view === "week";

  const singleView = props.singleView;
  const rightNow = props.rightNow;

  const placeholderImg = "/assets/images/placeholder.png";

  return (
    <div className="mx-2 my-3 flex h-full max-h-[38vh] min-h-max flex-col justify-between gap-2 px-2 text-white">
      <div className="flex gap-3 px-2">
        <div className="gradient_1 d3_box">
          <div>
            <CustomIcon iconName="WindIcon" className="h-4 text-white" />
          </div>
          <p className="text-xs">Vind</p>
          <p>
            {props.rightNow || props.singleView ? (
              <>
                {props.rightNow && <>{Math.round(props.data.wind.speed)}</>}
                {props.singleView && <>{Math.round(props.data.wind_speed)}</>}
              </>
            ) : (
              <>{Math.round(props.data.wind_speed)}</>
            )}{" "}
            <span className="text-sm">km/h</span>
          </p>
        </div>
        <div className="gradient_2 d3_box">
          <div>
            <CustomIcon iconName="PressureIcon" className="h-4 text-white" />
          </div>
          <p className="text-xs">Lufttryk</p>
          <p>
            {props.rightNow || props.singleView ? (
              <>
                {props.rightNow && <>{props.data.main.pressure}</>}
                {props.singleView && <>{props.data.pressure}</>}
              </>
            ) : (
              <>{props.data.pressure}</>
            )}{" "}
            <span className="text-sm">hPa</span>
          </p>
        </div>
        <div className="gradient_3 d3_box">
          <div>
            <CustomIcon iconName="HumidityIcon" className="h-4 text-white" />
          </div>
          <p className="text-xs">Fugtighed</p>
          <p>
            {props.rightNow || props.singleView ? (
              <>
                {props.rightNow && <>{props.data.main.humidity}</>}
                {props.singleView && <>{props.data.humidity}</>}
              </>
            ) : (
              <>{props.data.humidity}</>
            )}{" "}
            <span className="text-sm">%</span>
          </p>
        </div>
      </div>
      {(props.singleView || props.rightNow) && (
        <Container
          className={cn("px-8", props.singleView ? "py-3" : "pt-0.5 pb-1.5")}
        >
          <div className="flex items-center justify-between gap-1">
            <div className="w-12 text-center">
              <p
                className={cn(
                  "whitespace-nowrap",
                  today
                    ? "mb-1 text-xs uppercase text-main-gray"
                    : props.rightNow
                    ? "text-xs uppercase text-main-gray"
                    : "text-base text-white"
                )}
              >
                {today && <>I dag</>}
                {week && <>{dayjs.unix(props.data.dt).format("DD/MM")}</>}
                {props.rightNow && <>Lige nu</>}
              </p>
              {today && <p>{dayjs.unix(props.data.dt).format("HH:mm")}</p>}
              {props.rightNow && (
                <>{dayjs.unix(props.data.dt).format("HH:mm")}</>
              )}
            </div>
            <div className="flex w-full justify-center pl-3">
              {props.data?.weather[0]?.icon && (
                <div className="h-14 w-14">
                  <ion-img
                    src={
                      !props.data.weather[0].icon
                        ? placeholderImg
                        : `http://openweathermap.org/img/wn/${props.data?.weather[0]?.icon}@2x.png`
                    }
                    alt="OpenWeatherMap icon"
                  />
                </div>
              )}
            </div>
            <div className="w-28 text-center">
              <p className="">{props.data.weather[0].description}</p>
            </div>
          </div>
          <div className="now-list space-y-3">
            {props.rightNow && (
              <ul>
                <li>Solopgang</li>
                <li>
                  {dayjs.unix(props.data.sys.sunrise).format("HH:mm")}
                  {week && (
                    <>{dayjs.unix(props.data.sunrise).format("HH:mm")}</>
                  )}
                </li>
              </ul>
            )}
            {props.rightNow && (
              <ul>
                <li>Solnedgang</li>
                <li>
                  <>{dayjs.unix(props.data.sys.sunset).format("HH:mm")}</>
                  {week && <>{dayjs.unix(props.data.sunset).format("HH:mm")}</>}
                </li>
              </ul>
            )}
            <ul>
              <li>Føles som</li>
              <li>
                {rightNow && <>{Math.round(props.data.main.feels_like)}°</>}
                {today && <>{Math.round(props.data.feels_like)}°</>}
                {week && <>{Math.round(props.data.feels_like.day)}°</>}
              </li>
            </ul>
            {(rightNow || week) && (
              <ul>
                <li>Min. Temperatur</li>
                <li>
                  {rightNow && <>{Math.round(props.data.main.temp_min)}°</>}
                  {week && <>{Math.round(props.data.temp.min)}°</>}
                </li>
              </ul>
            )}
            {(rightNow || week) && (
              <ul>
                <li>Maks. Temperatur</li>
                <li>
                  {rightNow && <>{Math.round(props.data.main.temp_max)}°</>}
                  {week && <>{Math.round(props.data.temp.max)}°</>}
                </li>
              </ul>
            )}
            {today && (
              <>
                <ul>
                  <li>Temperatur</li>
                  <li>{Math.round(props.data.temp)}°</li>
                </ul>
                <ul>
                  <li>Overskyethed</li>
                  <li>{Math.round(props.data.clouds)}%</li>
                </ul>
              </>
            )}
            {(today || week) && (
              <ul>
                <li>Vindretning</li>
                <li>{Math.round(props.data.wind_deg)}/°</li>
              </ul>
            )}
          </div>
        </Container>
      )}
    </div>
  );
}
