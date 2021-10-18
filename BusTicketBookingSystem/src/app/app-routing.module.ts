import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import { HomeComponent } from './accounts/home/home.component';
import { SignupComponent } from './accounts/signup/signup.component';
import { TicketBookingComponent } from './booking/ticket-booking/ticket-booking.component';
import { BusbookingComponent } from './booking/busbooking/busbooking.component';
import { AddDetailsComponent } from './booking/add-details/add-details.component';
import { PaymentComponent } from './booking/payment/payment.component';
import { PaymentSuccessComponent } from './booking/payment-success/payment-success.component';

const routes: Routes = [
  
  {path:'login',component:LoginComponent},
  
  {path:'signup',component:SignupComponent},
  {path:'ticket_booking',component:TicketBookingComponent},
  {path:'bus_book',component:BusbookingComponent},
  {path:'details',component:AddDetailsComponent},
  {path:'payment',component:PaymentComponent},
  {path:'payment-success',component:PaymentSuccessComponent},
  {path:'',component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
