import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
   
  }
  cartNavigate(productCode,productName,productPrice,productQuantity,productPriceTotal){
    
    // alert(productCode.value+productName.value+productPrice.value+productQuantity.value+productPriceTotal.value )
  this.router.navigate(['cart/category']);
    this.router.navigate(['cart/order/'+ productCode.value + '/'+ productName.value + '/'+ productPrice.value + '/'+ productQuantity.value +'/'+ productPriceTotal.value ]);
  
  }

}
