import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BeerWeather } from './beer-weather/weather';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherDataService {

  constructor(private http: Http) { }

  getClima(){
    return this.http.get('http://dataservice.accuweather.com/currentconditions/v1/2929?apikey=%09vuZLQpQltII01G4BWfL0MIm3r7iANk8T&language=es-ar')
                    .map(response => 
                    {
                      let clima = response.json();             
                       return <BeerWeather[]>Object.keys(clima).map(key => Object.assign({ key }, clima[key]));
                     
                      
                    });     
  }

  
}
