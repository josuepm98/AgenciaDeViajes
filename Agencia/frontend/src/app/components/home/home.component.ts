import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public usuarioService: UsuarioService, public router: Router) {
    
  }

  ngOnInit() {
    //if(this.usuarioService.selectedUsuario._id == null){
    //}
  }
}
