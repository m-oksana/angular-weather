import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {from, mergeMap, Observable} from "rxjs";
import {IGeoCityApiResponse} from "../../models/api/geo-city-api-response.model";
import {LoaderService} from "./loader.service";

const geoUrl = environment.apiGeoUrl;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class GeocodeResolverService {

  constructor(private http: HttpClient,
              private loaderService: LoaderService) {
  }

  getCurrentCityByLatAndLon(): Observable<IGeoCityApiResponse[]> {
    this.loaderService.set(true);
    return this.getCurrentLocation()
      .pipe(mergeMap((position: any) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        const options = {
          params: new HttpParams()
            .set('lat', lat)
            .set('lon', lon)
            .set('appid', apiKey)
            .set('limit', 1)
        };
        return this.http.get<IGeoCityApiResponse[]>(geoUrl + '/reverse', options)
      }));
  }

  getLatAndLon(city: string): Observable<IGeoCityApiResponse[]> {
    const options = {
      params: new HttpParams()
        .set('q', city)
        .set('appid', apiKey)
        .set('limit', 1)
    };
    return this.http.get<IGeoCityApiResponse[]>(geoUrl + '/direct', options)
  }

  private getCurrentLocation() {
    const promise = new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(resolve);
    })

    return from(promise);
  }
}
