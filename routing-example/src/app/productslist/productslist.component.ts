import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  public categoryId;
  public products=[];

  constructor(private route:ActivatedRoute,private data:DataService) { }

  ngOnInit() {
this.categoryId=this.route.snapshot.paramMap.get('id');
this.products=this.data.getProducts().filter(x=>x.categoryId==this.categoryId);

  }

}
