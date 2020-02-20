import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Newprod} from './newprod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewproapiService {
  public products=[];
  public apiurl="http://localhost:9191/products";

  constructor(private http:HttpClient) { }

  public GetProducts():Observable<Newprod[]>{
    return this.http.get<Newprod[]>(this.apiurl);
  }
}
