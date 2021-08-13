import { Component } from '@angular/core';
import { data } from './data';
import { Products } from './product/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // products: Products[] = data;
  // product: Products;
  // AddProduct(item: Products) {
  //   this.products.push(item);
  // }
  // DetailProduct(item: Products) {
  //   this.product = item;
  // }
}
