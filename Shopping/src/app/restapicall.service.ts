import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapicallService {

  constructor(private http :HttpClient) { }
  getUserApi(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
