import { Component } from '@angular/core';
@Component({
selector:'app-home',
template:`<h2>{{title}}</h2>`,
styles:['h2{color:green;text-align:center}']

})
export class HomeComponent {
public title='Hello angular 8'
}