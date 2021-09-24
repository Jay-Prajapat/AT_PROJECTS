import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  add_payment(){
    this.router.navigate(['payment'])
  }
}
