import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/common.service';
import { IUser } from 'src/app/bususer';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: any;
  private status : string = ""
  private userList : IUser[] = []
  err: boolean = false


  constructor(private formBuilder: FormBuilder,private router:Router,private route:ActivatedRoute,private usrSvc:CommonService) {

  }


  get email_ctl() { return this.LoginForm.get('email')}
  get password_ctl() { return this.LoginForm.get('password')}

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }


  onSubmit() {
    this.usrSvc.getUsers().subscribe(data => this.userList = data)
    this.userList.forEach(element => {
      if(element.email == this.LoginForm.get('email')?.value && element.password == this.LoginForm.get('password')?.value)
      {
        
        this.router.navigate(['/']);
      }
      else
        this.err = true;
    });
    
  }
}
