import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vuelo } from '../model/vuelo';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  selectedVuelo: Vuelo;
  vuelos: Vuelo[];
  readonly URL_API = 'http://localhost:3100/api/vuelos';

  constructor(private http: HttpClient) {
    this.selectedVuelo = new Vuelo();
  }

  getVuelos(){
    return this.http.get(this.URL_API);
  }
}
