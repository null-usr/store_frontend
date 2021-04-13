import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  amount:number = 1;

  constructor(private cart: CartService) {
    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      url: ''
    }
  }

  ngOnInit(): void {
  }

  addToCart(p: Product, num: number): void
  {
    this.cart.addToCart(p, num);
    window.alert(`${num} ${p.name}(s) added to cart!`);

    //reset the amount
    this.amount = 0;
  }

}
