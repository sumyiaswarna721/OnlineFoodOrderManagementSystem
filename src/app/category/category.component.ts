import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  cartNavigate(){
    this.router.navigate(['cart/product'])
  }

}
