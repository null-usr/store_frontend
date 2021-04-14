import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //products is a tuple array with products and their amounts
  products: [Product, number][];
  owner: string;
  total: number;

  constructor(private httpClient: HttpClient) {
    this.total = 0;
    this.products = [];
    this.owner = '';
   }

  //add num products to cart
  addToCart(p: Product, num: number): void
  {
    let result = this.products.filter( obj => {
      return obj[0].id === p.id;
    } );

    if(result.length === 0)
    {
      this.products.push([p, num]);
    }
    else
    {
      //add it to the count
      result[0][1] += num;
    }
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

  getProducts(): Observable<Product[]>
  {
    return this.httpClient.get<Product[]>("assets/data.json");
  }
}
