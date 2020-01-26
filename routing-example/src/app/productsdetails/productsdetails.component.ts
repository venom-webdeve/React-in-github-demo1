import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.css']
})
export class ProductsdetailsComponent implements OnInit {

  public ProductId;
  public products=[];

  constructor(private route:ActivatedRoute,private data:DataService) { }

  ngOnInit() {

    this.ProductId=this.route.snapshot.paramMap.get('id');
    this.products=this.data.getProducts().filter(x=>x.productId==this.ProductId);

  }

}
