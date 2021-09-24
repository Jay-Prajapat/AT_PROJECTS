import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  constructor(private router : Router) 
  {
    this.email="";
    this.password="";
   }

  ngOnInit(): void {

  }
  onSubmit():void{
    if(this.email==="jayprajapati.1502@gmail.com" && this.password==="1234"){
    this.router.navigate(['/home']);
      
    }
    else{
      console.log("Error");
    }
  }

}
