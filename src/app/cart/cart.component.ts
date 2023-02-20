import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(
    private cartService: CartService,
    private formbuilder: FormBuilder
  ){}

  //购物车
  items = this.cartService.getItems();

  //表单模型：收集用户的姓名和地址以便进行结算
  checkoutForm = this.formbuilder.group({
    name: '',
    address: ''
  });

  //提交表单
  onSubmit(): void{
    //清空购物车
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  



}
