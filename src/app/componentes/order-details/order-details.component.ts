import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router'

import { OrdersService } from 'src/app/servicios/orders.service'

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  orderDetails: object;

  constructor(private activatedRoute: ActivatedRoute, private orders: OrdersService, private router: Router){
    this.activatedRoute.queryParams.subscribe(params =>{
      this.orderDetails=this.orders.ordersAvalible.find(item=>item._id==params.id)
    })
    //console.log(this.outlet.activatedRouteData['animation']);
  }

  ngOnInit() {}
}
