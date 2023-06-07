import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/main/main.module').then((m) => m.MainModule)
  },
  {
    path: 'cityWeather',
    loadChildren: () => import('./modules/city-weather/city-weather.module').then((m) => m.CityWeatherModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
