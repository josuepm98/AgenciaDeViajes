import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/model/hotel';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
  providers: [HotelService]
})
export class HotelComponent implements OnInit {

  constructor(public hotelService: HotelService, public router: Router) { }

  ngOnInit() {
    this.getHotels();
  }

  getHotels(){
    this.hotelService.getHoteles()
      .subscribe(res => {
        this.hotelService.hoteles = res as Hotel[];
        console.log(res);
      });
  }

  reservarHotel(){
    
  }
}

