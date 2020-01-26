import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

public getCategories(){
  return [
    {categoryId:1, categoryName:'Eletronices'},
    {categoryId:2, categoryName:'Shoes'},
  ];
}

public getProducts(){
  return[{productId:1,name:'Samsung TV',price:45000,categoryId:1,mfd:new Date('2019/02/15')},
    {productId:2,name:'Mobile', price:15000,categoryId:2,mfd:new Date('2019/04/19')},
    {productId:3,name:'Nike casual',price:3000,categoryId:1,mfd:new Date('2019/06/15')},
    {productId:4,name:'Lee Cooper Boot',price:4000,categoryId:2,mfd:new Date('2019/03/25')}];
}

}
