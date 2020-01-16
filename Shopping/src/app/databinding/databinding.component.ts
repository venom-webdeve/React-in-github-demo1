import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
public name;
public price;
public isinstock;
public shippedto;


public product={
name:'Samsung Tv',
Price:450000,
QTY:2,
MFD:new Date(2019/2/20),
instock:true
};
public Total(){
  return this.product.QTY*this.product.Price;
}
 }
