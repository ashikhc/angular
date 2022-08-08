import { Injectable } from '@angular/core';
import { Iproducts } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }


  getproducts(): Iproducts[]
  {
return[
  {
    productid: 1,
    productcode: 'CDD-1',
    productname: "Bat",
    productdate:" 24 Feb,2022",
    price: 100,
    productrating: 4,
    imageurl:"assets/bat.jpg"
  
  },
  {
    productid: 2,
    productcode: 'CDD-2',
    productname: "Ball",
    price: 170,
    productdate:" 10 Jan,2022",
    productrating: 3,
    imageurl:"assets/ball.jpg"
  }


]
  }
}
