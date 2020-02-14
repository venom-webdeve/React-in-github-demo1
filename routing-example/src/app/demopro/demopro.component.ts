import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';
import { error } from 'util';

@Component({
  selector: 'app-demopro',
  templateUrl: './demopro.component.html',
  styleUrls: ['./demopro.component.css']
})
export class DemoproComponent implements OnInit {

  public products=[];
  public response;

  constructor(private data:ApidataService) { }

  ngOnInit() {
    this.data.GetProducts().subscribe(data=>this.products=data);

  }
  public RegisterProduct(data){
    this.data.AddProducts(data).subscribe(error=>console.log('somthing went worng')
    );
    alert('Record Inserted');
  }

}
