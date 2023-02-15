import { Injectable } from '@angular/core';
import { products } from './product-data'

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  products = [];

  getProducts(){
    return this.products = products;
  }
}
