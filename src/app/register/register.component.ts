import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurentOwnerService } from './../restaurent-owner.service';
import { UserService } from './../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private userService: UserService, private router : Router) { }
  
  getOwner;
  ngOnInit() {
    this.userService.getUser().subscribe((response) =>{
      this.getOwner = response;
    })
  }
  

}
