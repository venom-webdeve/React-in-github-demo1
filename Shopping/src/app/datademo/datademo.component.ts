import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datademo',
  templateUrl: './datademo.component.html',
  styleUrls: ['./datademo.component.css']
})
export class DatademoComponent {

  public products=[{name:'Samsung Tv',price:3400000,category:'Electronices'},
                  {name:'Apple Tv',price:90000000,category:'Electronices'},
                  {name:'The Witcher',price:15000,category:'Books'},
                  {name:'The Witcher-Wild Hunt',price:15000,category:'Books'},
                  {name:'Nike Casual',price:3000,category:'Shoes'},
                  {name:'Lee Cooper Boot',price:6000,category:'Shoes'},

];
public AllCount=this.products.length;
public ElectronicesCount=this.products.filter(x=>x.category=='Electronices').length;
public ShoesCount=this.products.filter(x=>x.category=='Shoes').length;
public BooksCount=this.products.filter(x=>x.category=='Books').length;
public SelectedCategoryValue='All';
public CategoryChanged(SelectedCategoryName){
  this.SelectedCategoryValue=SelectedCategoryName;
}


}
