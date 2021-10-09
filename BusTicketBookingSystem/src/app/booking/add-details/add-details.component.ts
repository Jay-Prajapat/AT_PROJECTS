import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {
  count = [];
  AddDetailForm: any;
  submitted = false;

  constructor(private router: Router,private formBuilder: FormBuilder) { 
    this.count.length = 1;
  }

  get f() { return this.AddDetailForm.controls; }


  ngOnInit() {
    this.AddDetailForm = this.formBuilder.group({
      
      fullname: ['', Validators.required],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      gender:['',Validators.required],
      age : ['',Validators.required]
    });
  }


  // add_payment() {
  //   this.router.navigate(['payment'])
  // }

  add_passenger() {
    this.count.length++;
  }

  remove_passenger(){
    this.count.length--;
  }

  is_disabled(){
    if(this.count.length==1){
      return true;
    }
    return false;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.AddDetailForm.invalid) {
      return;
    }
    else{
      this.router.navigate(['/payment'])
    }
  }


}
