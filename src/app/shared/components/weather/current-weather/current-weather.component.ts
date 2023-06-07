import {Component, Input} from '@angular/core';
import {IWeatherApiResponse} from "../../../../models/api/weather-api-response.model";
import {TimeFormatterService} from "../../../services/time-formatter.service";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {

  constructor(public timeFormatter: TimeFormatterService) {
  }

  @Input() weather: IWeatherApiResponse = {};

}
