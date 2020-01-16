import { Component } from '@angular/core';

@Component({
  selector: 'app-mouseovndout',
  templateUrl: './mouseovndout.component.html',
  styleUrls: ['./mouseovndout.component.css']
})
export class MouseovndoutComponent {

  public ad='assets/iphone.jpeg';
  public showAd1(){
this.ad='assets/'
  }

}
