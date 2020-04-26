import { Component, OnInit, enableProdMode } from '@angular/core';

import { ProductService } from '../product.service';

import { Album } from '../album';

// albumInfo: Album;
  // myDate: Date;   
  // this.myDate = new Date();

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
   
  albumInfo;
  
  constructor(private _productService: ProductService) { }  

  ngOnInit() {        
    this._productService.getAlbum(1).subscribe(response => this.albumInfo=response);
  }

}
