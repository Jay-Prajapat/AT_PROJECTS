import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IDetails } from 'src/app/details';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/common.service';


@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {
  count = [];
  AddDetailForm: any;
  submitted = false;

  public detail:IDetails = {
    name:'',
    age:0,
    total_price:0
  }
  public ticket_price = 100;
  public total_price = this.ticket_price; 
  public status:string = "" 

  constructor(private router: Router,private formBuilder: FormBuilder,private route:ActivatedRoute,private detailsSvc:CommonService) { 
    this.count.length = 1;
  }

  get f() { return this.AddDetailForm.controls; }


  ngOnInit() {
    this.AddDetailForm = this.formBuilder.group({
      
      fullname: ['', Validators.required],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      age : ['',Validators.required]
    });
  }


  // add_payment() {
  //   this.router.navigate(['payment'])
  // }

  add_passenger() {
    this.count.length++;
    this.total_price = this.ticket_price*this.count.length;
  }

  remove_passenger(){
    this.count.length--;
    this.total_price = this.total_price-this.ticket_price;
  }

  is_disabled(){
    if(this.count.length==1){
      return true;
    }
    return false;
  }

  onNext(){
    this.router.navigate(['/bus_book'])
    this.detail.name = this.AddDetailForm.get('fullname')?.value;
    this.detail.age = this.AddDetailForm.get('age')?.value;
    this.detail.total_price = this.total_price;
    this.detailsSvc.postDetails(this.detail).subscribe({
      next: data => this.status = "New user added.",
      error: error => this.status = "Cannot add a new employee!"
    })
  }

  onSubmit() {
 
    this.submitted = true;

    


    
    // stop here if form is invalid
    if (this.AddDetailForm.invalid) {
      return;
    }
    // else{
    //   this.router.navigate(['/bus_book'])
    // }


  }


  

}
