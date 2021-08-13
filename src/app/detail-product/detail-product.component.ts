import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../product/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent implements OnInit {
  @Input() product: Products;

  constructor() {}

  ngOnInit(): void {}
}
