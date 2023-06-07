import {NgModule} from '@angular/core';
import {WeatherComponent} from "./components/weather/weather.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {CommonModule} from "@angular/common";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {CurrentWeatherComponent} from './components/weather/current-weather/current-weather.component';
import {HourlyWeatherComponent} from './components/weather/hourly-weather/hourly-weather.component';
import {DailyWeatherComponent} from './components/weather/daily-weather/daily-weather.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    WeatherComponent,
    CurrentWeatherComponent,
    HourlyWeatherComponent,
    DailyWeatherComponent
  ],
  exports: [
    WeatherComponent,
  ],
  imports: [
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    CommonModule,
    MatProgressSpinnerModule,
    TranslateModule,
  ],
  providers: [],
})
export class SharedModule {
}
