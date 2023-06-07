import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {IWeatherApiResponse} from "../../models/api/weather-api-response.model";
import {TranslateService} from "@ngx-translate/core";

const baseUrl = environment.apiBaseUrl;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient,
              private translateService: TranslateService) {
  }

  getCurrentWeatherByLatAndLon(lat: number, lon: number): Observable<IWeatherApiResponse> {
    const options = {
      params: new HttpParams()
        .set('lat', lat)
        .set('lon', lon)
        .set('appid', apiKey)
        .set('exclude', 'minutely')
        .set('units', 'metric')
        .set('lang', this.translateService.currentLang)
    };
    return this.http.get<IWeatherApiResponse>(baseUrl, options);
  }
}

