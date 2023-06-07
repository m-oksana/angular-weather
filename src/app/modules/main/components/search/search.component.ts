import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {GeocodeResolverService} from "../../../../shared/services/geocode-resolver.service";
import {Subject, takeUntil} from "rxjs";
import {ICoordinates} from "../../../../models/coordinates.model";
import {FormControl} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() onLatLogUpdated = new EventEmitter<ICoordinates>();

  searchCity = new FormControl(' ');

  public currentCity: string = '';
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private geocodeResolverService: GeocodeResolverService,
              private translateService: TranslateService) {
  }

  public ngOnInit(): void {
    this.geocodeResolverService
      .getCurrentCityByLatAndLon()
      .pipe(takeUntil(this.ngUnsubscribe))
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
          this.onLatLogUpdated.emit({lat: currentCity.lat, lon: currentCity.lon})
        }
      });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSubmit() {
    let searchParam = this.searchCity.getRawValue()
    if (searchParam) {
      this.geocodeResolverService
        .getLatAndLon(searchParam)
        .pipe(takeUntil(this.ngUnsubscribe))
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
            this.onLatLogUpdated.emit({lat: currentCity.lat, lon: currentCity.lon})
          }
        });
    }
  }
}
