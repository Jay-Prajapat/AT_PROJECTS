import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CommonService } from 'src/app/common.service';
import { data } from 'jquery';
// import { data } from 'jquery';
// import { error } from 'console';
import { IUser } from 'src/app/bususer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // private usrList : IUser[];


  // private status:string = ""
  // public usr:IUser = {
  //   username:'',
  //   email:'',
  //   password:'',
  //   mobilenumber:0,
  // }

  constructor(private formBuilder: FormBuilder, private usrService: CommonService, private route: ActivatedRoute, private router:Router) { }

    // valbutton = "Save";

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


    // registerForm: any;
    // submitted = false;
    // errorMessage = "";

    // this.router.navigate(['']);
    // this.submitted = true;

    // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //   return;
    // }
  // }


  

  ngOnInit(){

    // this.registerForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]],
    //   conf_password: ['', Validators.required],
    //   mobile: ['',Validators.required,Validators.maxLength(10)]
    // }, {
    //   validator: this.MustMatch('password', 'conf_password')
    // });

  }

  onRegister(){
    // this.usrService.postUsers(this.usr).subscribe({
    //   next:data => this.status = "Can not add user."
    // })
    this.router.navigate(['/payment']);
  }

  // get f() { return this.registerForm.controls; }

  // }

}
