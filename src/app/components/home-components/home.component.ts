import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { AppConfig } from './../../config/app.config';
import { ProductService } from './services/product.services'

@Component({
  selector: 'home',
  templateUrl: './html/home.component.html',
  providers: [
    ProductService
  ]
})
export class HomeComponent {
  constructor(
    private product: ProductService,
    private router: Router,
    private toaster: ToasterService,
    private config: AppConfig
  ) {}

  private products:any = [];
  public cartData:any = [];
  public cartTotal:any = 0;

  public cart(data:any, qty:any, type:any){
    let self = this;
    let found = 0;
    if(type == 'add'){
      self.cartData.forEach(function (item: any, index:any) {
        if(data.name == item.itm.name){
          found = 1;
        }
      });
      if (found == 0) {
        self.cartData.push({itm:data,qty:1});
      } else {
        self.toaster.pop('error', "Selected item already in cart!");
      }
    }else if(type == 'update'){
      self.cartData.forEach(function (item: any, index:any) {
        if(data.itm.name == item.itm.name){ 
          self.cartData[index].qty = parseInt(qty.target.value);
        }
      });
    }else if(type == 'delete'){
      self.cartData.map((item:any, index:any) => {
        if(data.itm.name == item.itm.name){
          self.cartData.splice(index, 1);
        }
      })
    }
    self.calculateTotal();
  }

  private calculateTotal(){
    let self = this;
    self.cartTotal = 0;
    self.cartData.forEach(function (item: any, index:any) {
      self.cartTotal = parseFloat(self.cartTotal)+(parseFloat(item.itm.price)*parseInt(item.qty));
    });
  }

  public confirmOrder(){
    this.router.navigate(['ordersuccess']);
  }

  public ngOnInit(): void {
    let self = this;    
    self.product.getProducts().subscribe(function (result) {      
      let rs = result.json();
      if (rs.status == 200) {
        self.products = rs.data.items;
      }
    });
  }
}