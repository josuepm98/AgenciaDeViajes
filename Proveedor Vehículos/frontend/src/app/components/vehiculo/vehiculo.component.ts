import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/model/vehiculo';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
  providers: [VehiculoService]
})
export class VehiculoComponent implements OnInit {

  constructor(public vehiculoService: VehiculoService, public router: Router) { }

  ngOnInit() {
    this.getVehiculos();
  }

  getVehiculos(){
    this.vehiculoService.getVehiculos()
      .subscribe(res => {
        this.vehiculoService.vehiculos = res as Vehiculo[];
        console.log(res);
      });
  }

  reservarVehiculo(){
    
  }
}
