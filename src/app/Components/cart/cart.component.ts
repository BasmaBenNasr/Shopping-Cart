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
  //check first if the product exist so pultiply that item ++
  let existed = false;

  for(let item in this.cartItems){
    if(this.cartItems[item].productId === product.id){
      this.cartItems[item].qty++
      existed = true
      break;
    }
  }
  

  //if the product doesnt exist in the cartItem already so just i need to push it 
  if(!existed){
    this.cartItems.push({
      productId: product.id,
      productName: product.name,
      qty: 1,
      price: product.price
    })
  }


    this.cartTotal = 0
    this.cartItems.forEach(item =>{
      this.cartTotal += (item.qty * item.price)
    })
  }
}
