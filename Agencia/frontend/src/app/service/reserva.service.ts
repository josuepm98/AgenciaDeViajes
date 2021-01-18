import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from '../model/reserva';
import { RegistroComponent } from '../components/registro/registro.component'; 
import { Observable } from 'rxjs/internal/Observable';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
    providedIn: 'root'
  })
  export class ReservaService {
  
    selectedReserva: Reserva;
    reservas: Reserva[];
    readonly URL_API = 'https://172.20.10.3/api/reservas';
  
    constructor(private http: HttpClient) {
      this.selectedReserva = new Reserva();
    }
    /*
    getReservas(){
        return this.http.get(this.URL_API);
    }*/
  
  }