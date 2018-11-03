import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private _http: HttpClient) { }

  dailyForecast() {
    // tslint:disable-next-line:max-line-length
    // return this._http
    //   .get('https://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22')
    //   .map(result => result);
    return this._http
      .get('https://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22');
  }
}
