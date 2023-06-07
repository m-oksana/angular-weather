import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {IWeatherApiResponse} from "../../../models/api/weather-api-response.model";
import {Subject, takeUntil} from "rxjs";
import {WeatherApiService} from "../../services/weather-api.service";
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnDestroy, OnChanges {

  @Input() lat: number = 0;
  @Input() lon: number = 0;

  public weather: IWeatherApiResponse = {};

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private weatherApiService: WeatherApiService,
    public loaderService: LoaderService
  ) {
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.lat !== 0 && this.lon !== 0) {
      this.load();
    }
  }

  load() {
    this.weatherApiService
      .getCurrentWeatherByLatAndLon(this.lat, this.lon)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
        this.weather = data;
      });
  }

}
