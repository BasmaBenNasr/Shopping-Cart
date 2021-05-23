import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from '../models/product';



const apiUrl = "http://localhost:3000/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Product1', 'This is the Best Product', 250),
    new Product(2, 'Product2', 'This is the Best Product', 50),
    new Product(3, 'Product3', 'This is the Best Product', 120),
    new Product(4, 'Product4', 'This is the Best Product', 310),
    new Product(5, 'Product5', 'This is the Best Product', 280),
    new Product(6, 'Product6', 'This is the Best Product', 160),
    new Product(7, 'Product7', 'This is the Best Product', 80),
  ];

  constructor(private http:HttpClient) { }

  //it will populate products from API
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl);
  }
}
