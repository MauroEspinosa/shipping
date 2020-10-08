import { Component, OnInit } from '@angular/core';
import { FinishedOrdersService } from 'src/app/servicios/admin-services/finished-orders.service';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {

  constructor(private orders: FinishedOrdersService) { 
    if(!this.orders.finishedOrders) this.orders.getOrders()
  }

  itemsCuantity(i){
    let order=this.orders.finishedOrders[i].suborders
    return order.reduce((acc,el)=> acc.concat(el.items),[]).length; 
  }

  ngOnInit() {}

}
