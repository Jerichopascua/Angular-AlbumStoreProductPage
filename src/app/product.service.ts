// import {Observable} from 'rxjs/Observable';

// import { Observable, observable } from 'rxjs';

// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
    //getAlbum(id: number): Observable<Album>{                
      // return this._http.get(this._albumUrl).map(response => <Album>response.json());      

import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { Album } from './album';

import {Product} from './product';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductService {

 private _albumUrl ='../assets/album.json';
 private _productsUrl='..assets/products.json';

  constructor(private _http: Http) { }

  getAlbum(id: number){
    return this._http.get(this._albumUrl).map(response => response.json());      
  }   

  // getAlbum(id: number): Observable<Album>{
  //   return this._http.get(this._albumUrl).map(response => <Album>response.json());       
    
  // }   

  
}
