import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  public productId;
  public productName;
  public productPrice;

  constructor(private route :ActivatedRoute) { }

  ngOnInit() {
    this.productId=this.route.snapshot.paramMap.get('id');
    this.productName=this.route.snapshot.paramMap.get('name');
    this.productPrice=this.route.snapshot.paramMap.get('price');
  }

}
