import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BusTicketBookingSystem';
  constructor(private router:Router) { 
    
  }

  // onSignup(){
  //   this.router.navigate(['/signup']);
  // }
}

