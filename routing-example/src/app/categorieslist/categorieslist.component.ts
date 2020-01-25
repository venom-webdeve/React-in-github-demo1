import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorieslist',
  templateUrl: './categorieslist.component.html',
  styleUrls: ['./categorieslist.component.css']
})
export class CategorieslistComponent implements OnInit {

public categories=[];

  constructor(private router:Router,private data:DataService) { }

  ngOnInit() {
   this.categories=this.data.getCategories();
  }
public categoryClick(item){
  this.router.navigate(['categories', item.categoryId]);
}

}
