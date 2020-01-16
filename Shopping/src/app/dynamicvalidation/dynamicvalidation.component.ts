import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamicvalidation',
  templateUrl: './dynamicvalidation.component.html',
  styleUrls: ['./dynamicvalidation.component.css']
})
export class DynamicvalidationComponent {

 public regExp;
 public tip;
 public pic;
 public mobileError;
 public SelectedCountryChanged(countryname){
 
   switch(countryname)
   {
     case'India':this.tip='india calling code +91 with 10digit';
     this.pic='assets/iphone.jpeg';
     this.regExp='/\+91[0-9]{10}/';
     break;
     case'US':this.tip='US calling code +001 with 6digit';
     this.pic='assets/iphone.jpeg';
     this.regExp='/\+001[0-9]{6}/';
     break;
     case'UK':this.tip='UK calling code +44 with 8 digit';
     this.pic='assets/iphone.jpeg';
     this.regExp='/\+44[0-9]{8}/';
   }
 }
public verifyMobile(mobile){
  if(mobile.match(this.regExp))
  {
    this.mobileError='Mobile verified  succesfully';
  }else{
    this.mobileError='Invalid mobile code check calling code';
  }
}
}
