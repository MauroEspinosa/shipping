import { Component, OnInit } from '@angular/core';
import { UserOrdersService } from 'src/app/servicios/user-orders.service'


@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})

export class UserOrdersComponent implements OnInit {

  constructor(private myOrders:UserOrdersService){ 
    if(!myOrders.orders) this.myOrders.getUserOrders()
  }

  ngOnInit() {
  }

}
