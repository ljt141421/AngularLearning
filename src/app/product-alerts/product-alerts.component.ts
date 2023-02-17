import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  //接收父组件（productListComponent）传递的数据
  @Input() product!: Product;
  //创建一个事件触发器，为了与父组件（productListComponent）通信（传递参数或者触发事件）
  @Output() notify = new EventEmitter();
}
