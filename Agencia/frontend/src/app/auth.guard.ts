import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsuarioService } from './service/usuario.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public usuarioService: UsuarioService,
    public router: Router
  ){}

  canActivate(): boolean{
    if(this.usuarioService.loggedIn()){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
  
}
