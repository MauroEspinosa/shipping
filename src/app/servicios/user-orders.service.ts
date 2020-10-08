import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class UserOrdersService {

  constructor(private http: HttpClient) { }

  orders: any
  /*orders=[{"status":"pendiente",
  "suborder":"JAU1932X",
  "type":"dividida",
  "brand": "asos",
  "delivery": "express",
  "currentCost": 300,
  "daysLeft":3,
  "cancelation": "inactiva",
  "aduanaFee": 120,
  "trackLinks":["http://dhl.com"],
  "items":[{
    "color": "",
    "details": "",
    "imageLink":"https://images.asos-media.com/products/asos-design-regular-revere-gray-large-scale-leaf-print/14860977-1-grey",
    "itemTitle":"ASOS DESIGN regular revere gray large scale leaf print | ASOS",
    "link": "https://www.asos.com/us/asos-design/asos-design-regular-revere-gray-large-scale-leaf-print/prd/14860977?colourwayid=16649750&SearchQuery=&cid=3602",
    "size": null
  },
  {
    "color": "",
    "details": "",
    "imageLink": "https://images.asos-media.com/products/asos-design-regular-shirt-with-standard-collar-in-pink-geo-print/14861719-1-pink",
    "itemTitle": "ASOS DESIGN regular shirt with standard collar in pink geo print | ASOS",
    "link": "https://www.asos.com/us/asos-design/asos-design-regular-shirt-with-standard-collar-in-pink-geo-print/prd/14861719?colourwayid=16649801&SearchQuery=&cid=3602",
    "size": null
  },
  {
    "color": "",
    "details": "",
    "imageLink": "https://images.asos-media.com/products/river-island-geo-print-shirt/20520377-1-white",
    "itemTitle": "River Island geo print shirt | ASOS",
    "link": "https://www.asos.com/us/river-island/river-island-geo-print-shirt/prd/20520377?colourwayid=60060938&SearchQuery=&cid=3602",
    "size": null
  },
  {
    "color": "",
    "details": "",
    "imageLink": "https://images.asos-media.com/products/vintage-supply-print-revere-two-piece-shirt-in-retro-print-in-purple/14505089-1-purple",
    "itemTitle": "Vintage Supply print revere two-piece shirt in retro print in purple | ASOS",
    "link": "https://www.asos.com/us/vintage-supply/vintage-supply-print-revere-two-piece-shirt-in-retro-print-in-purple/prd/14505089?colourwayid=16621391&SearchQuery=&cid=3602",
    "size": null
  },
  {
    "color": "",
    "details": "",
    "imageLink": "https://images.asos-media.com/products/pullbear-short-sleeve-shirt-with-leaf-print-in-black/20075695-1-blackwhite",
    "itemTitle": "Pull&Bear short sleeve shirt with leaf print in black | ASOS",
    "link": "https://www.asos.com/us/pullbear/pullbear-short-sleeve-shirt-with-leaf-print-in-black/prd/20075695?colourwayid=60006566&SearchQuery=&cid=3602",
    "size": null
  }
  ]
},
{"status":"recibida",
  "suborder":"JAU1932X",
  "type":"costo-max",
  "brand": "asos",
  "delivery": "express",
  "daysLeft":3,
  "cancelation": "inactiva",
  "aduanaFee": 120,
  "storeDeliveryCost": 600,
  "maxCost": 130,
  "currentCost": 90,
  "peopleNeeded":3,
  "trackLinks":["http://dhl.com"],
  "cancelReason":"",
  "participants": 4,
  "items":[{
    "color": "",
    "details": "",
    "imageLink":"https://images.asos-media.com/products/asos-design-regular-revere-gray-large-scale-leaf-print/14860977-1-grey",
    "itemTitle":"ASOS DESIGN regular revere gray large scale leaf print | ASOS",
    "link": "https://www.asos.com/us/asos-design/asos-design-regular-revere-gray-large-scale-leaf-print/prd/14860977?colourwayid=16649750&SearchQuery=&cid=3602",
    "size": null
  },
  {
    "color": "",
    "details": "",
    "imageLink": "https://images.asos-media.com/products/asos-design-regular-shirt-with-standard-collar-in-pink-geo-print/14861719-1-pink",
    "itemTitle": "ASOS DESIGN regular shirt with standard collar in pink geo print | ASOS",
    "link": "https://www.asos.com/us/asos-design/asos-design-regular-shirt-with-standard-collar-in-pink-geo-print/prd/14861719?colourwayid=16649801&SearchQuery=&cid=3602",
    "size": null
  },
  {
    "color": "",
    "details": "",
    "imageLink": "https://images.asos-media.com/products/river-island-geo-print-shirt/20520377-1-white",
    "itemTitle": "River Island geo print shirt | ASOS",
    "link": "https://www.asos.com/us/river-island/river-island-geo-print-shirt/prd/20520377?colourwayid=60060938&SearchQuery=&cid=3602",
    "size": null
  },
  {
    "color": "",
    "details": "",
    "imageLink": "https://images.asos-media.com/products/vintage-supply-print-revere-two-piece-shirt-in-retro-print-in-purple/14505089-1-purple",
    "itemTitle": "Vintage Supply print revere two-piece shirt in retro print in purple | ASOS",
    "link": "https://www.asos.com/us/vintage-supply/vintage-supply-print-revere-two-piece-shirt-in-retro-print-in-purple/prd/14505089?colourwayid=16621391&SearchQuery=&cid=3602",
    "size": null
  },
  {
    "color": "",
    "details": "",
    "imageLink": "https://images.asos-media.com/products/pullbear-short-sleeve-shirt-with-leaf-print-in-black/20075695-1-blackwhite",
    "itemTitle": "Pull&Bear short sleeve shirt with leaf print in black | ASOS",
    "link": "https://www.asos.com/us/pullbear/pullbear-short-sleeve-shirt-with-leaf-print-in-black/prd/20075695?colourwayid=60006566&SearchQuery=&cid=3602",
    "size": null
  }
  ]
},
{"status":"en-camino",
"suborder":"JAU1932X",
"type":"free",
"brand": "asos",
"delivery": "express",
"daysLeft":5,
"cancelation": "activa",
"aduanaFee": 120,
"trackLinks":["http://dhl.com"],
"cancelReason":"",
"goalAmount":1400,
"currentAmount":1266,
"participants": 4,
"items":[{
  "color": "",
  "details": "",
  "imageLink":"https://images.asos-media.com/products/asos-design-regular-revere-gray-large-scale-leaf-print/14860977-1-grey",
  "itemTitle":"ASOS DESIGN regular revere gray large scale leaf print | ASOS",
  "link": "https://www.asos.com/us/asos-design/asos-design-regular-revere-gray-large-scale-leaf-print/prd/14860977?colourwayid=16649750&SearchQuery=&cid=3602",
  "size": null
},
{
  "color": "",
  "details": "",
  "imageLink": "https://images.asos-media.com/products/asos-design-regular-shirt-with-standard-collar-in-pink-geo-print/14861719-1-pink",
  "itemTitle": "ASOS DESIGN regular shirt with standard collar in pink geo print | ASOS",
  "link": "https://www.asos.com/us/asos-design/asos-design-regular-shirt-with-standard-collar-in-pink-geo-print/prd/14861719?colourwayid=16649801&SearchQuery=&cid=3602",
  "size": null
},
{
  "color": "",
  "details": "",
  "imageLink": "https://images.asos-media.com/products/river-island-geo-print-shirt/20520377-1-white",
  "itemTitle": "River Island geo print shirt | ASOS",
  "link": "https://www.asos.com/us/river-island/river-island-geo-print-shirt/prd/20520377?colourwayid=60060938&SearchQuery=&cid=3602",
  "size": null
},
{
  "color": "",
  "details": "",
  "imageLink": "https://images.asos-media.com/products/vintage-supply-print-revere-two-piece-shirt-in-retro-print-in-purple/14505089-1-purple",
  "itemTitle": "Vintage Supply print revere two-piece shirt in retro print in purple | ASOS",
  "link": "https://www.asos.com/us/vintage-supply/vintage-supply-print-revere-two-piece-shirt-in-retro-print-in-purple/prd/14505089?colourwayid=16621391&SearchQuery=&cid=3602",
  "size": null
},
{
  "color": "",
  "details": "",
  "imageLink": "https://images.asos-media.com/products/pullbear-short-sleeve-shirt-with-leaf-print-in-black/20075695-1-blackwhite",
  "itemTitle": "Pull&Bear short sleeve shirt with leaf print in black | ASOS",
  "link": "https://www.asos.com/us/pullbear/pullbear-short-sleeve-shirt-with-leaf-print-in-black/prd/20075695?colourwayid=60006566&SearchQuery=&cid=3602",
  "size": null
}
]
}]*/


  getUserOrders(){
    this.http.get(`http://localhost:8080/orders/user`).subscribe(res=>{
      this.orders=res;
      this.orders.forEach(order => {
        order.items=[]
        order.suborders.forEach(suborder => order.items=order.items.concat(suborder.items));
      });
    })
  }
}
