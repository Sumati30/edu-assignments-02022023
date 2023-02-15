import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private route:Router , private prod:ProductServiceService) { }

  products = [];

  ngOnInit(): void {
    this.products = this.prod.getProducts();
    console.log(this.products)
  }

  // products = [
  //   {
  //     id:1,
  //     name:"S-Mobile",
  //     price: 8000,
  //   },
  //   {
  //     id:2,
  //     name:"Smart TV",
  //     price: 18000,
  //   },
  //   {
  //     id:3,
  //     name:"Camera",
  //     price: 10000,
  //   },
  //   {
  //     id:4,
  //     name:"Smart Watch",
  //     price: 15000,
  //   }
  // ]


  getProdDetails(x){
   // console.log('25', x)
   this.route.navigate(['/product', x])
  }
  


}
