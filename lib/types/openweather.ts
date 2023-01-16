export interface ICityDetail {
  name: string;
  weather: string;
  coord: {
    lat: number;
    lon: number;
  };
  population: number;
  sunrise: number;
  sunset: number;
  time: number;
}

export interface IDataListItem {
  dt: number;
  main: {
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  weather: { description: string }[];
}

export interface ITempData {
  value: number;
  time: number;
}

export interface IWeatherData {
  description: string;
  time: number;
}

/* export interface IWeatherDataList {

} */
