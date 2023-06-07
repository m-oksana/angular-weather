import {Injectable} from '@angular/core';
import {ICity} from "../../models/city.model";
import {map, Observable, zip} from "rxjs";
import {environment} from "../../../environments/environment";
import {GeocodeResolverService} from "./geocode-resolver.service";
import {TranslateService} from "@ngx-translate/core";
import {IGeoCityApiResponse} from "../../models/api/geo-city-api-response.model";

@Injectable({
  providedIn: 'root'
})
export class FavouriteCitiesService {
  private favouriteCities: ICity[] = environment.favouriteCities;

  constructor(private geocodeResolverService: GeocodeResolverService,
              private translateService: TranslateService) {
  }

  getFavouriteCities(): Observable<ICity[]> {
    const allRequests = this.favouriteCities
      .map(city => this.geocodeResolverService.getLatAndLon(city.name));

    return zip(allRequests)
      .pipe(map((cities: IGeoCityApiResponse[][]) => {
        return cities.map((cityData) => {
          const city = cityData[0];
          return {
            name: city.name,
            localizedName: city?.local_names?.[this.translateService.currentLang]
          }
        })
      }));
  }
}
