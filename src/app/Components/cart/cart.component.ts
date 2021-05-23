import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {MessengerService} from 'src/app/services/messenger.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: { productId: number; productName: string; qty: number; price: number; }[] = [];
  cartTotal = 0

  constructor(private msg:MessengerService) { }

  ngOnInit(){
    this.msg.getMessage().subscribe((product: any)=>{
      console.log(product)
      this.addProductToCart(product)
    })
  }

  addProductToCart(product: Product){
    
    this.cartItems.push({
      productId: product.id,
      productName: product.name,
      qty: 1,
      price: product.price
    })

    this.cartTotal = 0
    this.cartItems.forEach(item =>{
      this.cartTotal += (item.qty * item.price)
    })
  }
}
