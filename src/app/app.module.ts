import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductAddComponent } from './product-add/product-add.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ProductService } from './product.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdminComponent } from './admin/admin.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductAddComponent,
    DetailProductComponent,
    NotfoundComponent,
    AdminComponent,
    ProductEditComponent,
    NavComponent,
    CategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
