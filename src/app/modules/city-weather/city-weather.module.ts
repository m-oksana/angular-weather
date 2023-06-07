import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CityWeatherPageComponent} from './pages/city-weather-page/city-weather-page.component';
import {SharedModule} from "../../shared/shared.module";
import {CityWeatherRoutingModule} from "./city-weather-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    CityWeatherPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CityWeatherRoutingModule,
    MatButtonModule,
    TranslateModule
  ]
})
export class CityWeatherModule {
}
