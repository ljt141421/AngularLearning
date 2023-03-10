import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ){}

  product: Product | undefined;


  //获取路由上面传递的productId并拿到具体product数据
  ngOnInit() :void{
    //first get the productId from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //then find the product that correspond with the id provided in route
    this.product = products.find(product => product.id === productIdFromRoute);
    throw new Error('Method not implemented.');
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }



}
