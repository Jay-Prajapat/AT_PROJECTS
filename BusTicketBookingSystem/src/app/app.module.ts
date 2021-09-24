import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule } from '@angular/router';

import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './accounts/login/login.component';
import { SignupComponent } from './accounts/signup/signup.component';
import { HomeComponent } from './accounts/home/home.component';
import { TicketBookingComponent } from './booking/ticket-booking/ticket-booking.component';
import { BusbookingComponent } from './booking/busbooking/busbooking.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddDetailsComponent } from './booking/add-details/add-details.component';
import { PaymentComponent } from './booking/payment/payment.component';
import { PaymentSuccessComponent } from './booking/payment-success/payment-success.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    TicketBookingComponent,
    BusbookingComponent,
    AddDetailsComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    
   
   
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
   FormsModule,
   NgbModule,
   
    
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
