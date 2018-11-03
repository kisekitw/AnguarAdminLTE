import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';

import { Chart } from 'chart.js';
@Component({
  selector: 'app-weatherwidget',
  templateUrl: './weatherwidget.component.html',
  styleUrls: ['./weatherwidget.component.css']
})
export class WeatherwidgetComponent implements OnInit {
  chart = [];
  data: any;
  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this._weather.dailyForecast().subscribe(res => {
      // tslint:disable-next-line:no-shadowed-variable
      const temp_max = res['list'].map(res => res.main.temp_max);
      console.log('temp_max:' + temp_max);
      // tslint:disable-next-line:no-shadowed-variable
      const temp_min = res['list'].map(res => res.main.temp_min);
      console.log('temp_min:' + temp_min);
      // tslint:disable-next-line:no-shadowed-variable
      const alldates = res['list'].map(res => res.dt);
      console.log('alldates:' + alldates);

      const weatherDates = [];
      // tslint:disable-next-line:no-shadowed-variable
      alldates.forEach((res) => {
        const jsdate = new Date(res * 1000);
        weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
      });

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: weatherDates,
          datasets: [
            {
              data: temp_max,
              borderColor: '#3cba9f',
              fill: false
            },
            {
              data: temp_min,
              borderColor: '#ffcc00',
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });


    });
  }
}
