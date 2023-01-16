import { atom } from "recoil";

interface Forecast {
  open?: boolean;
  view: "now" | "today" | "week" | "day";
}

const defaultForecast: Forecast = {
  open: true,
  view: "today",
};

export const ForecastState = atom<Forecast>({
  key: "forecast",
  default: defaultForecast,
});
