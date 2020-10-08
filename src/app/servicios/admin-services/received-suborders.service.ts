import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceivedSubordersService {
  receivedSuborders=[{"suborder":"12CU9ASEE", 
                      "user":{"name":"Mauro Alvarez Espinosa",
                              "direction":{"street": "Valle de mesen #63",
                                           "suburb":"Valle de aragon",
                                           "CP":"55280"},
                              "phone":"5570795101",
                              "email":"maauurooxd@hotmail.com"}, 
                      "status":"pending", 
                      "items":[{"id": "12345",
                                "color": "rojo",
                                "details": "",
                                "imageLink":"https://images.asos-media.com/products/asos-design-regular-revere-gray-large-scale-leaf-print/14860977-1-grey",
                                "itemTitle":"ASOS DESIGN regular revere gray large scale leaf print | ASOS",
                                "link": "https://www.asos.com/us/asos-design/asos-design-regular-revere-gray-large-scale-leaf-print/prd/14860977?colourwayid=16649750&SearchQuery=&cid=3602",
                                "size": "xs",
                                "confirmed": false,
                                "rejected": false
                              }]
                      },
                      {"suborder":"8MC43MM65", 
                      "user":{"name":"Mauro Alvarez Espinosa",
                              "direction":{"street": "Valle de mesen #63",
                                           "colonia":"Valle de aragon",
                                           "CP":"55280"},
                              "phone":"5570795101",
                              "email":"maauurooxd@hotmail.com"}, 
                      "status":"pending", 
                      "items":[{"id": "12345",
                                "color": "rojo",
                                "details": "",
                                "imageLink":"https://images.asos-media.com/products/asos-design-regular-revere-gray-large-scale-leaf-print/14860977-1-grey",
                                "itemTitle":"ASOS DESIGN regular revere gray large scale leaf print | ASOS",
                                "link": "https://www.asos.com/us/asos-design/asos-design-regular-revere-gray-large-scale-leaf-print/prd/14860977?colourwayid=16649750&SearchQuery=&cid=3602",
                                "size": "xs",
                                "confirmed": false,
                                "rejected": false
                              }]
                      }
  ]

  constructor(private http : HttpClient) { }

  deliveryAssigned(suborderId, status){
    console.log({suborderId, status});
    return this.http.get("https://jsonplaceholder.typicode.com/todos/1")
  }
}
