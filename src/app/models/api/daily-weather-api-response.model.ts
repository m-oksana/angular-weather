import {ITemperatureApiResponse} from "./temperature-api-response.model";
import {IWeatherDescriptionApiResponse} from "./weather-description-api-response.model";

export interface IDailyWeatherApiResponse {
  dt: number,
  sunrise: number,
  sunset: number,
  temp: ITemperatureApiResponse,
  feels_like: ITemperatureApiResponse,
  pressure: number,
  humidity: number,
  weather: IWeatherDescriptionApiResponse[],
  uvi: number
}
