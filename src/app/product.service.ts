import { Injectable } from '@angular/core';
// import { data } from './data';
import { Products } from './product/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API: string = 'http://localhost:3000/product';
  // product: Products[] = data;
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.API);
  }

  addProduct(item: Products): Observable<Products> {
    return this.http.post<Products>(this.API, item);
  }

  removeProduct(id: Number): Observable<Products> {
    return this.http.delete<Products>(`${this.API}/${id}`);
  }
  productDetail(id: Number): Observable<Products> {
    return this.http.get<Products>(`${this.API}/${id}`);
  }

  updateProduct(item: Products): Observable<Products> {
    return this.http.put<Products>(`${this.API}/${item.id}`, item);
  }
}
