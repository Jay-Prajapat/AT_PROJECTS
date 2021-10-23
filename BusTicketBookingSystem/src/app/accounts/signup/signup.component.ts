import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { CommonService } from 'src/app/common.service';

import { IUser } from 'src/app/bususer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:  [ CommonService]
})
export class SignupComponent implements OnInit {
  
  registerForm:any
  submitted = false;
  //private usrList : IUser[];
  err: boolean = false


  public status:string = ""
  public usr:IUser = {
    username:'',
    email:'',
    password:'',
    mobilenumber:'',
  }

  constructor(private formBuilder: FormBuilder,private router:Router,private route:ActivatedRoute,private usrSvc:CommonService) { 
    this.registerForm = new FormGroup({
      uname: new FormControl('', Validators.required),
      uemail: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")]),
      upassword: new FormControl('',Validators.required),
      conf_password: new FormControl('',Validators.required),
      mobile:new FormControl('',Validators.required)
    });
  }
  // MustMatch(controlName: string, matchingControlName: string) {
  //   return (formGroup: FormGroup) => {
  //     const control = formGroup.controls[controlName];
  //     const matchingControl = formGroup.controls[matchingControlName];

  //     if (matchingControl.errors && !matchingControl.errors.mustMatch) {
  //       // return if another validator has already found an error on the matchingControl
  //       return;
  //     }

  //     // set error on matchingControl if validation fails
  //     if (control.value !== matchingControl.value) {
  //       matchingControl.setErrors({ mustMatch: true });
  //     } else {
  //       matchingControl.setErrors(null);
  //     }
  //   }
  // }

  ngOnInit(){
  }
  get uname_ctl() { return this.registerForm.get('uname')}
  get email_ctl() { return this.registerForm.get('uemail')}
  get password_ctl() { return this.registerForm.get('upassword')}
  get mobile_ctl() { return this.registerForm.get('mobile')}
  
  get conf_password_ctl() { return this.registerForm.get('confirm_password')}
  get mobile_number_ctl(){return this.registerForm.get('mobile')}

  onRegister():void{
    this.usr.username = this.registerForm.get('uname')?.value;
    this.usr.email = this.registerForm.get('uemail')?.value;
    this.usr.password= this.registerForm.get('upassword')?.value;
    this.usr.mobilenumber = this.registerForm.get('mobile')?.value;
    this.usrSvc.postUsers(this.usr).subscribe({
      next: data => this.status = "New user added.",
      error: error => this.status = "Cannot add a new employee!"
    })
    if(this.status == "New user added.")
      this.router.navigate(['/']);
    else
      this.err = true;
  
    
  }

}


