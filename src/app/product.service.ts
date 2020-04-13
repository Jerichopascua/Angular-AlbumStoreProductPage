import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _albumUrl: string;  

  
  constructor(private _http: Http) {
    this._albumUrl="../assets/album.json"
   }

   getAlbum(id : nunmber){
     
  } 
   
}
