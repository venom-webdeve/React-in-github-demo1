import { Component } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent {

 public submitClick(obj){
   alert(obj.txtName+" "+"is shipped to"+" "+obj.shippedTo);

 }
}
