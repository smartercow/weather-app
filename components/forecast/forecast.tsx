import { useState } from "react";
import RowForecast from "./row-forecast";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Container } from "@components/container/container";
import { useRecoilState } from "recoil";
import { ForecastState } from "@lib/states/forecast";
import DayForecast from "./day-forecast";

export type ForecastProps = {
  data: any[];
  singleView: boolean;
  setSingleView: (value: boolean) => void;
};

export default function Forecast(props: ForecastProps): JSX.Element {
  dayjs.extend(utc);
  const [forecastState, setForecastState] = useRecoilState(ForecastState);
  console.log("propsDATATA", props.data);

  const [dayData, setDayData] = useState([]);

  const DayData = dayData.length > 0;

  const today = forecastState.view === "today";
  const week = forecastState.view === "week";
  const day = forecastState.view === "day";

  const SingleView = () => {
    props.setSingleView(true);
  };

  return (
    <>
      <div className="b_c h-full" hidden={!props.singleView}>
        <DayForecast data={dayData} singleView={props.singleView} />
      </div>

      <div hidden={props.singleView}>
        <Container className="mx-2 my-3 text-center text-white">
          <div className="mb-1.5 pt-1">
            <RowForecast data={props.data[0]} heading />
          </div>
          <div className="bottom-container overflow-y-scroll scrollbar-hide">
            {props.data.slice(0, 12).map((curr_data) => {
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
