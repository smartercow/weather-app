import { useRecoilValue } from "recoil";
import { ForecastState } from "@lib/states/forecast";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import {
  timeOutline,
  calendarNumberOutline,
  cloudyOutline,
} from "ionicons/icons";
import { CustomIcon } from "@components/ui/custom-icon";
import { TabState } from "@lib/states/tab";

type RowForecastProps = {
  data: any;
  search?: boolean;
  heading?: boolean;
};
export default function RowForecast(props: RowForecastProps): JSX.Element {
  dayjs.extend(utc);
  const tabState = useRecoilValue(TabState);
  const forecastState = useRecoilValue(ForecastState);

  const search = tabState.view === "search";
  const currLoc = tabState.view === "curr_loc";
  const today = forecastState.view === "today";
  const week = forecastState.view === "week";

  const placeholderImg = "/assets/images/placeholder.png";

  return (
    <div className="flex h-full items-center justify-between px-3">
      <div className="w-32">
        {props.heading ? (
          <>
            {today && (
              <p className="forecast-heading">
                <ion-icon icon={timeOutline} />
              </p>
            )}
            {week && (
              <p className="forecast-heading">
                <ion-icon icon={calendarNumberOutline} />
              </p>
            )}
          </>
        ) : (
          <>
            {today && (
              <p className="text-sm">
                {dayjs.unix(props.data.dt).format("HH:mm")}
              </p>
            )}
            {week && (
              <p className="whitespace-nowrap text-sm">
                {dayjs.unix(props.data.dt).format("DD/MM")}
              </p>
            )}
          </>
        )}
      </div>
      <div className="w-36 justify-center pl-5 pr-3">
        {props.heading ? (
          <p className="forecast-heading">
            <ion-icon icon={cloudyOutline} />
          </p>
        ) : (
          <div className="flex w-full justify-center">
            <div className="h-14 w-14">
              {props.data.weather[0].icon && (
                <ion-img
                  src={
                    !props.data.weather[0].icon
                      ? placeholderImg
                      : `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`
                  }
                  alt="OW"
                />
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex w-36 justify-center">
        {props.heading ? (
          <p className="forecast-heading pl-1">
            <CustomIcon
              iconName="ThermometerFullIcon"
              className="h-5 text-main-gray"
            />
          </p>
        ) : (
          <>
            <p className="text-base">
              {currLoc && today && <>{Math.round(props.data.temp)}°</>}
              {currLoc && week && <>{Math.round(props.data.temp.max)}°</>}
              {search && <>{Math.round(props.data.main.temp)}°</>}
            </p>
          </>
        )}
      </div>

      <div className="flex w-36 justify-center">
        {props.heading ? (
          <>
            <p className="forecast-heading pl-1">
              {currLoc && today && (
                <CustomIcon
                  iconName="HumidityIcon"
                  className="h-5 text-main-gray"
                />
              )}
              {currLoc && week && (
                <CustomIcon
                  iconName="ThermometerEmptyIcon"
                  className="h-5 text-main-gray"
                />
              )}
              {search && (
                <CustomIcon
                  iconName="ThermometerEmptyIcon"
                  className="h-5 text-main-gray"
                />
              )}
            </p>
          </>
        ) : (
          <p className="text-base text-main-gray">
            {currLoc && today && <>{Math.round(props.data.humidity)}</>}
            {currLoc && week && <>{Math.round(props.data.temp.min)}°</>}
            {search && <>{Math.round(props.data.main.temp_min)}°</>}
          </p>
        )}
      </div>
      <div className="flex w-72 justify-center px-4">
        {props.heading ? (
          <p className="forecast-heading">
            <CustomIcon iconName="WeatherIcon" className="h-5 text-main-gray" />
          </p>
        ) : (
          <p className="text-center text-xs">
            {props.data.weather[0].description}
          </p>
        )}
      </div>
    </div>
  );
}
