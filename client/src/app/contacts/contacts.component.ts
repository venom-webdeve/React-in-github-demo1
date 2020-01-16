import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

public getcontact;
public addcontact;
public deletecontact;


  constructor(private http:HttpClient) { }
 product =[];
  ngOnInit() {
   const url="localhost:3000/api/contacts";
    this.http.get(url).subscribe((data: any[])=>{
      console.log(data);
      this.product = data;
    });  
    // this.http.get(url).subscribe(res[])=>{
    //   this.pro=res;
    // })
  }
  
  

}
