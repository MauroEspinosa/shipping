import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router'

import { OrdersService } from 'src/app/servicios/orders.service'
import { routeAnimations } from '../../animatios'

@Component({
  selector: 'app-resultados-container',
  templateUrl: './resultados-container.component.html',
  styleUrls: ['./resultados-container.component.css'],
  animations: [routeAnimations]
})
export class ResultadosContainerComponent implements OnInit {
  visible:boolean;
  orderId:string;
  store: string;
  buttonText: string;
  componentActive: any;

  constructor(private orders: OrdersService, private router:Router, private activatedRoute: ActivatedRoute, private http: HttpClient) { 
    this.activatedRoute.queryParams.subscribe(params =>{
      this.store=params.store
      this.orderId=params.id;
    })

    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd)
        this.router.isActive("/resultados/join",false) ? this.buttonText="FINALIZAR" : this.buttonText="UNIRME"
        this.router.isActive("/resultados/order",false) || this.router.isActive("/resultados/join",false) ? this.visible=true : this.visible=false;
    })
  }

  ngOnInit() { }

  joinToOrder(){
    if(this.componentActive.itemsForm){
      if(this.componentActive.itemsForm.valid){
        this.http.post("http://localhost:8080/suborders",{orderId: this.orderId, items:this.componentActive.itemsForm.value.products}).subscribe(
          res => this.router.navigate(["/perfil/orders"]),
          err => alert("Algo salio mal. Intentalo mas tarde")
        )
      }
    }
    else{
      this.http.get("http://localhost:8080/auth-me", {observe:"response"}).subscribe(
        res => {if(res.status==200) this.router.navigate(["/resultados/join"], {queryParams:{store:this.store,id:this.orderId}})},
        err => this.router.navigate(["/login"])
      )
    }
  }

  onActivate(event){
    this.componentActive=event
  }
  
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
    

}
