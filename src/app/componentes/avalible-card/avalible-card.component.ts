import { Component, OnInit } from '@angular/core';

import { OrdersService } from 'src/app/servicios/orders.service'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'avalible-card',
  templateUrl: './avalible-card.component.html',
  styleUrls: ['./avalible-card.component.css']
})
export class AvalibleCardComponent implements OnInit {

  constructor(private orders: OrdersService) { }

  ngOnInit() {
  }

}
