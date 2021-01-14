import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { NgForm } from '@angular/forms';
import { Vuelo } from 'src/app/model/vuelo';
import { VueloService } from 'src/app/service/vuelo.service';

@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css'],
  providers: [VueloService]
})
export class VueloComponent implements OnInit {

  constructor(public vueloService: VueloService, public router: Router) { }

  ngOnInit() {
    this.getVuelos();
  }

  getVuelos(){
    this.vueloService.getVuelos()
      .subscribe(res => {
        this.vueloService.vuelos = res as Vuelo[];
        console.log(res);
      });
  }

  reservaVuelo(){
    
  }

}
