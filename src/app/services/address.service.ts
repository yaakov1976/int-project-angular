//https://data.gov.il/api/action/datastore_search?resource_id=a7296d1a-f8c9-4b70-96c2-6ebb4352f8e3
//https://raw.githubusercontent.com/royts/israel-cities/master/israel-cities.json
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './../class/city';
import { Observable } from 'rxjs';
import { StreetObject } from './../class/street-object';
@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient:HttpClient) { }
  getTheCity() :Observable<City[]>{
    return this.httpClient.get<City[]>('https://raw.githubusercontent.com/royts/israel-cities/master/israel-cities.json');
  }
  getTheStreet() :Observable<StreetObject[]>{
    return this.httpClient.get<StreetObject[]>("assets/streets.json");
  }

}
