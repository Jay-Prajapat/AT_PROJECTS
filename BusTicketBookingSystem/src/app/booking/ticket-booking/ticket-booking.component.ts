import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { IBus } from 'src/busdetail';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {
  private busList:IBus[]=[]
  error:boolean = false 
  private d_source:string=''
  private d_destination:string=''
  private d_arrivaltime:string=''
  private d_departuretime:string=''
  private d_price:number=0
  private d_type:string=''
  public searchList:IBus ={source:'',destination:'',arrivaltime:'',departuretime:'',price:0,type:''}
   
  select_source:string='';
  selectSource(event:any){
    this.select_source=event.target.value;

  }
  select_destination:string='';
  selectDestination(event:any){
    this.select_destination=event.target.value;
  }
  
bus=[
  {
    arrival_time:"5pm", 
    departure_time:"7pm",
    source:"Nadiad",
    dest:"Surat",
    type:"Express" ,
    price:200
  },
  {
  arrival_time:"6pm", 
  departure_time:"9pm",
  source:"Surat",
  dest:"Nadiad" ,
  type:"Express" ,
  price:200
  },
  {
  arrival_time:"2pm", 
  departure_time:"4pm",
  source:"Surat",
  dest:"Vyara" ,
  type:"Local" ,
  price:70
  },
  {
  arrival_time:"9am", 
  departure_time:"4pm",
  source:"Vyara",
  dest:"Nadiad" ,
  type:"Express" ,
  price:500
  },
  {
  arrival_time:"6pm", 
  departure_time:"7:30pm",
  source:"Ahmedabad",
  dest:"Nadiad" ,
  type:"Local" ,
  price:50
  },
  {
  arrival_time:"12pm", 
  departure_time:"7pm",
  source:"Surat",
  dest:"Ahmedabad" ,
  type:"Express" ,
  price:500
  },
  {
    arrival_time:"6pm", 
    departure_time:"10pm",
    source:"Ahemadabad",
    dest:"Vyara" ,
    type:"Local" ,
    price:300
  }
]
 
  
  constructor(private router:Router,private route:ActivatedRoute,private busSvc:CommonService) { }

  ngOnInit(): void {
    
  }
  
  onBusBook(){
    this.router.navigate(['/details']);
  }
  onSearch(){
    this.busSvc.getBuses().subscribe(data => this.busList= data)
    this.busList.forEach(element =>{ 
      if(element.source == this.select_source && element.destination == this.select_destination){
        // this.d_source=element.source
  
        this.searchList.source=element.source
        this.searchList.destination=element.destination
        this.searchList.arrivaltime=element.arrivaltime
        this.searchList.departuretime=element.departuretime
        this.searchList.price=element.price
        this.searchList.type=element.type
        console.log(this.select_source)
        this.router.navigate(['/'])
      }
      else
          this.error = true;

    });
  }

}

