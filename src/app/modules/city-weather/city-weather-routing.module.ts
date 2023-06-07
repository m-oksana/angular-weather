import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CityWeatherPageComponent} from "./pages/city-weather-page/city-weather-page.component";

const routes: Routes = [
  {path: ':city', component: CityWeatherPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityWeatherRoutingModule {
}
