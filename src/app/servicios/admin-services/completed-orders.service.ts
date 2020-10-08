import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class CompletedOrdersService {
  /*completedOrders=[{"status":"completed",
                    "brand": "asos",
                    "orderNumber": "12345",
                    "brandOrderNumber": "123872",
                    "delivery": "express"
                  },
                  {"status":"completed",
                    "brand": "shein",
                    "orderNumber": "54321",
                    "brandOrderNumber": "112238",
                    "delivery": "express"
                  }]*/

  completedOrders:any

  constructor(private http: HttpClient) { }

  getOrders(){
    return this.http.get("http://localhost:8080/admin_orders?status=en-espera").pipe(map(res => this.completedOrders=res))
  }

  addTracking(formValue){
    return this.http.post("http://localhost:8080/admin_orders/tracking",formValue);
  }
}
