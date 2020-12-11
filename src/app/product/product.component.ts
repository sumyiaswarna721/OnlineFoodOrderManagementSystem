import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router : Router, private activatedRoute : ActivatedRoute){}

  ngOnInit() {
    
  }
cartNavigate(){
    this.router.navigate(['/cart/singleproduct'], {relativeTo : this.activatedRoute});
    
  }
}
