import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../model/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  selectedHotel: Hotel;
  hoteles: Hotel[];
  readonly URL_API = 'http://localhost:3300/api/hoteles';

  constructor(private http: HttpClient) {
    this.selectedHotel = new Hotel();
  }

  getHoteles(){
    return this.http.get(this.URL_API);
  }
}
