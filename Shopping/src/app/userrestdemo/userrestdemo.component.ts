import { Component, OnInit } from '@angular/core';
import { RestapicallService } from '../restapicall.service';

@Component({
  selector: 'app-userrestdemo',
  templateUrl: './userrestdemo.component.html',
  styleUrls: ['./userrestdemo.component.css']
})
export class UserrestdemoComponent implements OnInit {

users:any;

  constructor(private service :RestapicallService) { }

  ngOnInit() {
this.service.getUserApi().subscribe((data)=>this.users=data)

  }

}
