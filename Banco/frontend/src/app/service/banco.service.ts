import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Banco } from '../model/banco';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  selectedBanco: Banco;
  bancos: Banco[];
  readonly URL_API = 'https://192.168.100.42:3400/api/bancos';

  constructor(private http: HttpClient) {
    this.selectedBanco = new Banco();
  }

  getBancos(){
    return this.http.get(this.URL_API);
  }

  reserva(){
    return this.http.post<any>(this.URL_API + '/reserva', this.selectedBanco);
  }
}
