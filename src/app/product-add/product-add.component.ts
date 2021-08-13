import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Products } from '../product/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  // product = {
  //   id: 1,
  //   name: '',
  //   price: '',
  // };
  // @Output() data = new EventEmitter<Products>();

  constructor(private productService: ProductService, private router: Router) {}
  product: Products = new Products();
  ngOnInit(): void {}
  onAddProduct() {
    this.productService.addProduct(this.product).subscribe((data) => {
      alert('Thêm thành công');
      this.router.navigateByUrl('/product');
    });
  }
}
