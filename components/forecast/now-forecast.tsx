import DayForecast from "./day-forecast";

type ForecastNowProps = {
  data: any;
  rightNow?: boolean;
};

export default function ForecastNow(props: ForecastNowProps): JSX.Element {
  const data = props.data;

  return <>{data && <DayForecast data={data} rightNow />}</>;
}
