import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { Album } from './album';

// import {Observable} from 'rxjs/Observable';

// import { Observable, observable } from 'rxjs';

// import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


// @Injectable({
//   providedIn: 'root'
// })
    //getAlbum(id: number): Observable<Album>{                
      // return this._http.get(this._albumUrl).map(response => <Album>response.json());      

@Injectable()
export class ProductService {

  private _albumUrl ='../assets/album.json';

  constructor(private _http: Http) { }


  getAlbum(id: number){
    return this._http.get(this._albumUrl).map(response => response.json());      
  }   

  // getAlbum(id: number): Observable<Album>{
  //   return this._http.get(this._albumUrl).map(response => <Album>response.json());       
    
  // }   
}
