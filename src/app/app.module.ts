import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NewsComponent } from './news/news.component';
import { ShopComponent } from './shop/shop.component';
import { SingleNewsComponent } from './single-news/single-news.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { PaymentComponent } from './payment/payment.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CartComponent,
    CheckoutComponent,
    NewsComponent,
    ShopComponent,
    SingleNewsComponent,
    SingleProductComponent,
    HomeComponent,
    OrderComponent,
    ProductComponent,
    CategoryComponent,
    RestaurentComponent,
    PaymentComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "home",
        component: HomeComponent,
        children: [

          {
            path: "about",
            component: AboutComponent
          },
          {
            path: "restaurent",
            component: RestaurentComponent
          },
          // {
          //   path:"contact",
          //   component:
          // }

        ]
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "cart",
        component: CartComponent,
        children: [

          {
            path: "category",
            component: CategoryComponent
          },

          {
            path: "product",
            component: ProductComponent
            // children:[
            //   {
            //     path:"singleproduct",
            //     component:SingleProductComponent

            //   }
            // ]
          },
          {
            path: "singleproduct",
            component: SingleProductComponent

          },
          {
            path: "restaurent",
            component: RestaurentComponent
          },
          
      {
        path: "register",
        component: RegisterComponent

      },
          
      {
        path: "order",
        component: OrderComponent

      },
          {
            path: "order/:productCode/:productName/:productPrice/:productQuantity/:productPriceTotal",
            component: OrderComponent
          },
          {
            path: "checkout",
            component: CheckoutComponent

          },
          {
            path: "payment",
            component: PaymentComponent
          },

        ]
      },

      {
        path: "news",
        component: NewsComponent

      },
      {
        path: "shop",
        component: ShopComponent

      },

      {
        path: "single-news",
        component: SingleNewsComponent

      }





    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
