import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Subject, switchMap, takeUntil} from "rxjs";
import {ICoordinates} from "../../../../models/coordinates.model";
import {GeocodeResolverService} from "../../../../shared/services/geocode-resolver.service";
import {ActivatedRoute} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-city-weather-page',
  templateUrl: './city-weather-page.component.html',
  styleUrls: ['./city-weather-page.component.scss']
})
export class CityWeatherPageComponent implements OnInit, OnDestroy {

  lat$ = new BehaviorSubject<number>(0);
  lon$ = new BehaviorSubject<number>(0);

  currentCity: string = '';

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private geocodeResolverService: GeocodeResolverService,
              private route: ActivatedRoute,
              private translateService: TranslateService) {
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          let favCity = String(params.get('city'));
          return this.geocodeResolverService
            .getLatAndLon(favCity);
        })
      ).pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
        let currentCity = data[0];
        if (currentCity.local_names) {
          if (currentCity.local_names[this.translateService.currentLang]) {
            this.currentCity = currentCity.local_names[this.translateService.currentLang]
          } else {
            this.currentCity = currentCity.name;
          }
        }
        if (currentCity.lat && currentCity.lon) {
          this.lat$.next(currentCity.lat);
          this.lon$.next(currentCity.lon);
        }
      });
  }

  updateCoordinates(coordinates: ICoordinates) {
    this.lat$.next(coordinates.lat);
    this.lon$.next(coordinates.lon);
  }
}
