import { Component,Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childdemo',
  templateUrl: './childdemo.component.html',
  styleUrls: ['./childdemo.component.css']
})
export class ChilddemoComponent implements OnChanges {

  @Input() public uname;
  public currentValue;
  public previouesValue;
ngOnChanges(changes:SimpleChanges){

for(var property in changes)
{

let change=changes[property];
this.currentValue=change.currentValue;
this.previouesValue=change.previousValue;
}

}


}
