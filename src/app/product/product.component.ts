import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { Products } from './product';
// onnit là vòng đời.
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Products[];
  data: Products;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  removeProduct(id: number) {
    this.productService.removeProduct(id).subscribe((data) => {
      alert('Bạn có chắc chắn muốn xóa');
      this.products = this.products.filter((item) => item.id != id);
    });
  }
  detailProduct(product: Products) {
    console.log(product);
  }
}
