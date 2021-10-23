import { Component, OnInit, Injectable } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { MatStepperIntl } from '@angular/material/stepper';
import { CommonService } from 'src/app/common.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IUserDetails } from 'src/app/userdetail';

@Component({
  selector: 'app-busbooking',
  templateUrl: './busbooking.component.html',
  styleUrls: ['./busbooking.component.css']
})

export class BusbookingComponent implements OnInit {
  public status:string = ""
  err: boolean = false

  userDetailForm:any
  public userdetail:IUserDetails = {
    email:"",
    mo_number:0
}

  constructor(private formBuilder: FormBuilder,private router:Router,private route:ActivatedRoute,private detailSvc:CommonService) { 
    this.userDetailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")]),
      mo_number:new FormControl('',Validators.required)
    });
  }

  get email_ctl() { return this.userDetailForm.get('email')}
  get mobile_number_ctl() { return this.userDetailForm.get('mo_number')}
  

  onSubmit(){
    this.userdetail.email = this.userDetailForm.get('email')?.value;
    this.userdetail.mo_number = this.userDetailForm.get('mo_number')?.value;
    this.detailSvc.postUserDetails(this.userdetail).subscribe({
      next: data => this.status = "New User Details added.",
      error: error => this.status = "Cannot add a new User Details!"
      
    })
    if(this.status == "New User Details added.")
      this.router.navigate(['/payment']);
    else
      this.err = true;
  }

  ngOnInit(): void {
  }
  
}
