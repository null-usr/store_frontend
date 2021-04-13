import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //products is a tuple array with products and their amounts
  products: [Product, number][];
  owner: string;
  total: number;

  constructor() {
    this.total = 0;
    this.products = [];
    this.owner = '';
   }

  //add num products to cart
  addToCart(p: Product, num: number): void
  {
    this.products.push([p, num]);
    //console.log(this.products);
  }

  getItems(): [Product, number][]
  {
    return this.products;
  }

  getOwner()
  {
    return this.owner;
  }

  getTotal()
  {
    return this.total;
  }

  clear(): void
  {
    this.products = [];
  }
}
