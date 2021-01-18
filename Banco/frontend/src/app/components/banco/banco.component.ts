import { Component, OnInit } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
//import { NgForm } from '@angular/forms';
import { Banco } from 'src/app/model/banco';
import { BancoService } from 'src/app/service/banco.service';

declare var M: any;

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css'],
  providers: [BancoService]
})
export class BancoComponent implements OnInit {

  constructor(public bancoService: BancoService, public router: Router) { }

  ngOnInit() {
    this.getBancos();
  }

  getBancos(){
    this.bancoService.getBancos()
      .subscribe(res => {
        this.bancoService.bancos = res as Banco[];
        console.log(res);
      });
  }

  reserva(){
    this.bancoService.reserva()
      .subscribe(
        res => {
          M.toast({html: 'Transacción realizada'});
          setTimeout(() => { window.location.href='https://192.168.100.42:4200/home'}, 1000);
        },
        err => {
          M.toast({html: 'Operación cancelada'});
        }
      )
  }

}
