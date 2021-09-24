import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {
  
bus=[
  {
    arrival_time:"5pm", 
    departure_time:"7pm",
    source:"nadiad",
    dest:"surat",
    type:"Express" ,
    price:200
  },
  {
  arrival_time:"6pm", 
  departure_time:"9pm",
  source:"surat",
  dest:"nadiad" ,
  type:"Express" ,
  price:200
  },
  {
    arrival_time:"6pm", 
    departure_time:"10pm",
    source:"ahemadabad",
    dest:"rajkot" ,
    type:"local" ,
    price:300
  }
]
 
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  onBusBook(){
    this.router.navigate(['/bus_book']);
  }

}
