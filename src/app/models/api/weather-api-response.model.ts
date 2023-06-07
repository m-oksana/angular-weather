import {ICurrentWeatherApiResponse} from "./current-weather-api-response.model";
import {IHourlyWeatherApiResponse} from "./hourly-weather-api-response.model";
import {IDailyWeatherApiResponse} from "./daily-weather-api-response.model";

export interface IWeatherApiResponse {
  lat?: number,
  lon?: number,
  timezone_offset?: number,
  current?: ICurrentWeatherApiResponse,
  hourly?: IHourlyWeatherApiResponse[],
  daily?: IDailyWeatherApiResponse[]
}
