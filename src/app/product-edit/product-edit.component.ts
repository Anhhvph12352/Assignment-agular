import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Products } from '../product/product';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  product: Products;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getInfo();
  }
  getInfo() {
    this.activatedRoute.params.subscribe((params) => {
      this.productService.productDetail(params.id).subscribe((data) => {
        console.log(data);
        this.product = data;
      });
    });
  }
  updateProduct(product: any) {
    // console.log(product);
    this.productService.updateProduct(product).subscribe((data) => {
      alert('Bạn đã cập nhật thành công');
      this.router.navigateByUrl('/product');
    });
  }
}
