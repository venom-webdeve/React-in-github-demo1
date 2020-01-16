import { Component} from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.css']
})
export class SwitchdemoComponent {
 public product={
   name:'Samsung TV',
   price:70000,
   description:'some detaile about samsung tv',
   mfd:new Date('2019/02/10'),
   photo:'assets/iphone.jpeg',
 };
public SelectedView='info';
public chooseView(obj){

this.SelectedView = obj.target.value;
}

}
