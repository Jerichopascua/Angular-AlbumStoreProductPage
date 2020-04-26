import { Component, OnInit, enableProdMode } from '@angular/core';

import { ProductService } from '../product.service';

import { Album } from '../album';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
   
  // albumInfo: Album;
  albumInfo;
  myDate: Date;   
  constructor(private _productService: ProductService) { }
  // this.myDate = new Date();
  ngOnInit() {    
    this._productService.getAlbum(1).subscribe(response => this.albumInfo=response);                
  }

}
