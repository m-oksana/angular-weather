import {Component, Input} from '@angular/core';
import {TimeFormatterService} from "../../../services/time-formatter.service";
import {IDailyWeatherApiResponse} from "../../../../models/api/daily-weather-api-response.model";

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss']
})
export class DailyWeatherComponent {

  constructor(public timeFormatter: TimeFormatterService) {
  }

  @Input() dailyWeather: IDailyWeatherApiResponse[] = [];
}
