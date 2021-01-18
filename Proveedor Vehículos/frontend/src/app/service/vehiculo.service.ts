import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../model/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  selectedVehiculo: Vehiculo;
  vehiculos: Vehiculo[];
  readonly URL_API = 'https://172.20.10.3:3200/api/vehiculos';

  constructor(private http: HttpClient) {
    this.selectedVehiculo = new Vehiculo();
  }

  getVehiculos(){
    return this.http.get(this.URL_API);
  }
}
