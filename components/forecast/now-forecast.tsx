import DayForecast from "./day-forecast";

type ForecastNowProps = {
  data: any;
  rightNow?: boolean;
};

export default function ForecastNow(props: ForecastNowProps): JSX.Element {
  const dataIn = props.data;
  console.log("propsDATATA1111", props.data);
  console.log("propsDATATA2222", dataIn);

  return <>{dataIn && <DayForecast data={props.data} rightNow />}</>;
}
