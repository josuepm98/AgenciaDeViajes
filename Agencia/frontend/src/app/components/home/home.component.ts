import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from 'src/app/service/reserva.service';
import { UsuarioService } from 'src/app/service/usuario.service';

declare var M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public usuarioService: UsuarioService, public reservaService: ReservaService, public router: Router) {
    
  }

  ngOnInit(): void {
  }
  /*
  checkReservas(){
    this.router.navigate(['/reservas']);
  }*/

}
