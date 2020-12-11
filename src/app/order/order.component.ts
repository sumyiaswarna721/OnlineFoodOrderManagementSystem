import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  productCode;
  productName;
  productQuantity;
  productPrice;
  productPriceTotal;



  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(
      product => {
        this.productCode = product.get("productCode");
        this.productName = product.get("productName");
        this.productQuantity = product.get("productQuantity");
        this.productPrice = product.get("productPrice");
        this.productPriceTotal = product.get("productPriceTotal");

      }
    )
  }

  cartNavigate() {
    
    this.router.navigate(['cart/product']);
    
    this.router.navigate(['cart/payment/']);
    
  }
}

