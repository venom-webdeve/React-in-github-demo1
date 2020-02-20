import { NewproapiService } from './../newproapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newproductdemo',
  templateUrl: './newproductdemo.component.html',
  styleUrls: ['./newproductdemo.component.css']
})
export class NewproductdemoComponent implements OnInit {

  public products=[];

  constructor(private data:NewproapiService) { }

  ngOnInit() {
    this.data.GetProducts().subscribe(data=>this.products=data);
  }

}
