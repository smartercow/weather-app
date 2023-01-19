import RowForecast from "./row-forecast";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import Locale from "dayjs/locale/da";
import { Container } from "@components/container/container";
import { useRecoilValue } from "recoil";
import { ForecastState } from "@lib/states/forecast";
import DayForecast from "./day-forecast";

export type ForecastProps = {
  data: any[];
  dayData: any[];
  setDayData: (value: any) => void;
  singleView: boolean;
  setSingleView: (value: boolean) => void;
};

export default function Forecast(props: ForecastProps): JSX.Element {
  dayjs.extend(utc);
  const forecastState = useRecoilValue(ForecastState);
  const dateToday = dayjs().locale(Locale).format("DD/MM");

  const data = props.data;
  const dayData = props.dayData;
  const setDayData = props.setDayData;
  const singleView = props.singleView;
  const setSingleView = props.setSingleView;

  const today = forecastState.view === "today";
  const week = forecastState.view === "week";
  const day = forecastState.view === "day";

  const SingleView = () => {
    setSingleView(true);
  };

  return (
    <>
      <div className="b_c h-full" hidden={!singleView}>
        <DayForecast data={dayData} singleView={singleView} />
      </div>

      <div hidden={singleView}>
        <Container className="mx-2 my-2 text-center text-white">
          <div className="mb-1 pt-0.5">
            <RowForecast data={data[0]} heading />
          </div>
          <div className="bottom-container overflow-y-scroll scrollbar-hide">
            {data
              .filter((x) =>
                today ? dayjs.unix(x.dt).format("DD/MM") === dateToday : true
              )
              .slice(1)
              .map((curr_data) => {
                return (
                  <div
                    key={curr_data.dt}
                    onClick={() => {
                      setDayData(curr_data);
                      SingleView();
                    }}
                  >
                    <RowForecast data={curr_data} />
                  </div>
                );
              })}
          </div>
        </Container>
      </div>
    </>
  );
}
