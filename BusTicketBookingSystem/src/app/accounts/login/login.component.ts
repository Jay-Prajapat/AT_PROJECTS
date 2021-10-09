import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: any;
  submitted = false;


  constructor(private formBuilder: FormBuilder,private router:Router) {

  }


  get f() { return this.LoginForm.controls; }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.LoginForm.invalid) {
      return;
    }
    else{
      this.router.navigate(['/payment']);
    }
  }
}
