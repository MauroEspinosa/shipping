import { Component, OnInit } from '@angular/core';
import { WaitingOrdersService } from 'src/app/servicios/admin-services/waiting-orders.service'
import { SearchbarService } from 'src/app/servicios/admin-services/searchbar.service';

@Component({
  selector: 'app-orders-on-way',
  templateUrl: './orders-on-way.component.html',
  styleUrls: ['./orders-on-way.component.css']
})
export class OrdersOnWayComponent implements OnInit {

  trackingId;

  constructor(private orders: WaitingOrdersService, private searchbar: SearchbarService) { 
    if(!this.orders.waitingOrders) this.orders.getOrders()
  }

  ngOnInit() {}

  selectPackage(trackingId){
    this.trackingId=trackingId
  }

  confirmPackage(orderId){
    let orderIndex=this.orders.waitingOrders.findIndex(i=>i._id==orderId)
    let packageIndex=this.orders.waitingOrders[orderIndex].trackingNumbers.findIndex(i=>i._id==this.trackingId)

    if(packageIndex!=-1){
      let packageNumber=this.orders.waitingOrders[orderIndex].trackingNumbers[packageIndex].number
      if(confirm(`${'Realmente deseas confirmar el paquete'} ${packageNumber}`)){
        this.orders.packageArrived(orderId, this.trackingId).subscribe(
          res=>this.orders.waitingOrders[orderIndex].trackingNumbers[packageIndex].received=true,
          err => alert("Algo salio mal. intentalo mas tarde")
        ) 
      }
    }

    else {
      let brandOrderNumber=this.orders.waitingOrders[orderIndex].brandOrderNumber
      alert(`${'Selecciona una guia de la orden'} ${brandOrderNumber}`)
    }
  }

  receivedPackages(brandOrderNumber){
    let index=this.orders.waitingOrders.findIndex(i=>i.brandOrderNumber==brandOrderNumber)
    let ordersPackagesLength=this.orders.waitingOrders[index].trackingNumbers.length
    let receivedPackages=this.orders.waitingOrders[index].trackingNumbers.reduce((acc,el)=>{
      if(el.received==true) acc++
      return acc
    },1)

    if (receivedPackages>ordersPackagesLength) return "Completa"
    else return receivedPackages
  }

}
