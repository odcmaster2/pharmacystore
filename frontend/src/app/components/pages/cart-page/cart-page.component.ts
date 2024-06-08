import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';
import { TitleComponent } from '../../partials/title/title.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';


@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [TitleComponent,CommonModule,RouterLink,NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService:CartService){
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  ngOnInit(): void { 
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.drug.id);
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.drug.id, quantity);
  }
}
