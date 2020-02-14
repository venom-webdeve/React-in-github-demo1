import { Injectable } from '@angular/core';
import  {Observable} from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { IProduct } from './iproduct';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';


@Injectable()

export class ApidataService {
  public products=[];
  public apiurl="http://localhost:3555/api/getproducts";
  public posturl="http://localhost:3555/api/addproducts";


  constructor(private http:HttpClient) { }
  public GetProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.apiurl);
  }

public AddProducts(data){
  return this.http.post<any>(this.posturl,data).pipe(catchError(this.CatchError));
}

public CatchError(error:HttpErrorResponse){
  return throwError(error.statusText);
}

}
