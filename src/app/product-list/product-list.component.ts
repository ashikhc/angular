import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Iproducts } from './product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

imagewidth:number = 100;
imageheight:number=100;
showImage: boolean = false;
//listfilter:string = "cart";

private _listfilter:string='';

get listfilter():string
{
  return this._listfilter;
}

set listfilter(value:string)
{
  this._listfilter=value;
  console.log("In setter",value);
  this.filterproducts=this.productfilter(value);
}

filterproducts:Iproducts[]=[];

products: Iproducts[] =[]

productfilter(filterBy: string):Iproducts[]
{
filterBy= filterBy.toLowerCase();
return this.products.filter((products:Iproducts)=>
products.productname.toLowerCase().includes(filterBy));
} 

toggleImage()
{
this.showImage=!this.showImage;
}

constructor(private productService:ProductService) 
{ 

}


  ngOnInit(): void {
    this.products=this.productService.getproducts();
    this.filterproducts=this.products;
    
  }

}
