import { Component} from '@angular/core';

@Component({
  selector: 'app-conditiondemo',
  templateUrl: './conditiondemo.component.html',
  styleUrls: ['./conditiondemo.component.css']
})
export class ConditiondemoComponent{

  public product=[{name:'Samsung TV',price:500000,Category:'Electronices'},
  
  {name:'Nike Casuals',price:5000,Category:'Shoes'}];

  public filter='Electronices';
}
