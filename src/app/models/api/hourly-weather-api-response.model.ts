import {IWeatherDescriptionApiResponse} from "./weather-description-api-response.model";

export interface IHourlyWeatherApiResponse {
  dt: number,
  temp: number,
  feels_like: number,
  pressure: number,
  humidity: number,
  uvi: number,
  visibility: number,
  weather: IWeatherDescriptionApiResponse[],
}
