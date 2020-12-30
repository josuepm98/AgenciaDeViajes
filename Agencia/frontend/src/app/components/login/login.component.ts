import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public usuarioService: UsuarioService, public router: Router) { }

  ngOnInit(): void {
  }

  logIn(){
    this.usuarioService.loginUsuario()
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
        },
        err => {
          M.toast({html: 'Error en la autentificación'});
        }
      )
  }
}
