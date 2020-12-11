import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrls: ['./restaurent.component.css']
})
export class RestaurentComponent implements OnInit {

  constructor(private userService: UserService, private router : Router) { }
  
  getData;
  ngOnInit() {

    this.userService.getUser().subscribe((response) =>{
      this.getData = response;
    })
  }
  registerUser(data){
this.userService.createUser(data);
  }
  }
  


