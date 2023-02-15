import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 id:any;
 products = [];
  prodID: any;
  prodName: any;
  prodDetails: any;
  url: any;
  price: any;
  constructor(private route:ActivatedRoute, private prod:ProductServiceService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.products = this.prod.getProducts();
    console.log(this.products)
    for(let prd of this.products){
      if(this.id === prd.id){
        console.log(prd.id)
        this.prodID = prd.id ;
        this.prodName = prd.name ;
        this.prodDetails = prd.details;
        this.url = prd.url;
        this.price = prd.price;
      }
    }
  }
    
}
