import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from '../models/product';



const apiUrl = "http://localhost:3000/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  //it will populate products from API
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl);
  }
}
