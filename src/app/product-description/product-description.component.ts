import { Component, OnInit, enableProdMode } from '@angular/core';

import { Album } from '../album';

import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
   
  albumInfo: Album;
  myDate: Date;   
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    
    this._productService.getAlbum(1).subscribe(response=>this.albumInfo=response);            
    this.myDate = new Date();
    // console.log('=>', this.albumInfo.releaseDate);

    // this.state.galerie.length > 0 ? console.log('=>', this.state.gallery.album.id) : '';
  }

}
