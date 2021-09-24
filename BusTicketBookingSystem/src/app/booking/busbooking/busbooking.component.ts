import { Component, OnInit,Injectable } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import {MatStepperIntl} from '@angular/material/stepper';

@Component({
  selector: 'app-busbooking',
  templateUrl: './busbooking.component.html',
  styleUrls: ['./busbooking.component.css']
})

export class BusbookingComponent implements OnInit {
  
  
  constructor(private router:Router) { }

  
  

  ngOnInit(): void {
      }
  add_details(){
    this.router.navigate(['/details']);
  }
}
