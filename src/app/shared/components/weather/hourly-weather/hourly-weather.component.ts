import {Component, Input} from '@angular/core';
import {TimeFormatterService} from "../../../services/time-formatter.service";
import {IHourlyWeatherApiResponse} from "../../../../models/api/hourly-weather-api-response.model";

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss']
})
export class HourlyWeatherComponent {

  constructor(public timeFormatter: TimeFormatterService) {
  }

  @Input() hourlyWeather: IHourlyWeatherApiResponse[] = [];
}
