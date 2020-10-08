import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SelectedStoreService } from './selected-store.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  /*ordersAvalible: any=[{"type": "divided",
  "id":1,
  "brand": "asos",
  "delivery": "express",
  "currentCost": 300,
  "costJoining":266,
  "cancelation": "inactiva",
  "daysLeft": 6,
  //MODIFICAR! asignar un valor nuemerico en backend en base a la longitud del arreglo de subordenes
  "participants":[{"id":1},{"id":2},{"id":3},{"id":4},{"id":5}]
 },
 {"type": "maximum-cost",
  "id":2,
  "brand": "asos",
  "delivery": "express",
  "maxCost": 130,
  "peopleNeeded":3,
  "cancelation": "activa",
  "daysLeft": 4,
  "participants":[{"id":1},{"id":2},{"id":3},{"id":4},{"id":5},{"id":6}]
 },
 {"type":"free",
  "id":3,
  "brand":"asos",
  "delivery":"express",
  "goalAmount":1400,
  "currentAmount":1266,
  "cancelation":"activa",
  "daysLeft":2,
  "participants":[{"id":1},{"id":2},{"id":3},{"id":4},{"id":5},{"id":6}]
 }]*/
  ordersAvalible: any;

  constructor(private http: HttpClient, private selectedStore: SelectedStoreService) { }

  getOrders(){
    this.http.get(`http://localhost:8080/orders/brand/${this.selectedStore.store}`).subscribe(res=>{
        this.ordersAvalible=res;
    })
    /*return new Promise((resolve, reject)=>{
      this.http.get(`http://localhost:8080/orders/${this.selectedStore.store}`).subscribe(res=>{
        this.ordersAvalible=res; resolve(this.ordersAvalible)
      })
    })*/
  }
}
