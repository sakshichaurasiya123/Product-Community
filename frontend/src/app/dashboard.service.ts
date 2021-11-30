import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './model/Product';
import { Reviews } from './model/Reviews';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  readonly url = "http://localhost:8090";

  //This method is used to get list of product by using  get request on api
  public getProductFromRemote(code: String): Observable<any> {
    return this.http.get<any>(this.url + '/getProductBySearch' + '/' + code);
  }

  //This method is used to store product in database by using post request on api
  public postProduct(product: Product): Observable<{}> {
    return this.http.post<Product>(this.url + '/insertProduct', product);
  }

  //This method is used to store review in databases with product id by using put request on api
  public putReview(review: Reviews, code: string): Observable<{}> {
    return this.http.put<{}>(this.url + '/insertReview' + '/' + code, review);
  }
  
  //This method  is used to  get all review list with their product id  by using  get request on api
  public getReviewList(code: string): Observable<Array<Reviews>> {
    return this.http.get<Array<Reviews>>(this.url + '/getAllReview' + '/' + code);
  }
  
  //This method is used to get average  of rating by using get request on api
  // public getAverageReview(id: any): Observable<any> {
  //   return this.http.get<any>(this.url + '/getAvgRating' + '/' + id)
  // }

  //This method is used to get product by using get request on api
  public getProductById(code: String) {
    return this.http.get<any>(this.url + '/getProductById' + '/' + code);
  }
}

