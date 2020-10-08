import { Component, OnInit, ViewChild, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { WaitingOrdersService } from 'src/app/servicios/admin-services/waiting-orders.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-incoming-suborders',
  templateUrl: './incoming-suborders.component.html',
  styleUrls: ['./incoming-suborders.component.css']
})
export class IncomingSubordersComponent implements OnInit {

  order:any;
  brandOrderNumber;
  startX
  scrollLeft;
  down=false
  scrollDiv

  @ViewChildren("scrolling") draggable: QueryList<any>

  constructor(private orders: WaitingOrdersService , private route : ActivatedRoute, private elementRef: ElementRef, private router: Router) { 
    this.route.paramMap.subscribe(res=>{
      this.order=this.orders.waitingOrders.find(i=>i.brandOrderNumber==res.get("id"))
      this.brandOrderNumber=res.get("id");
    })
  }

  mouseDown(e, id){
    this.down = true;
    this.scrollDiv=this.draggable.find((template) => template.nativeElement.id==id)
    this.startX = e.pageX - this.scrollDiv.nativeElement.offsetLeft
    this.scrollLeft = this.scrollDiv.nativeElement.scrollLeft;
  }

  mouseUp(){
    this.down=false
  }

  mouseMove(e){
    if(!this.down) return;
    e.preventDefault();
    let x = e.pageX - this.scrollDiv.nativeElement.offsetLeft;
    const walk = (x - this.startX)*1.5; 
    this.scrollDiv.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  orderCompleted(){
    let orderIndex=this.orders.waitingOrders.findIndex(i=>i.brandOrderNumber==this.brandOrderNumber)
    this.orders.waitingOrders.splice(orderIndex,1)
    this.router.navigate(['admin/realizadas/en-camino'])
  }

  suborderCompleted(suborderNumber){
    let orderIndex
    let suborderIndex
    let order=this.orders.waitingOrders.find((i,index)=>{
      orderIndex=index
      return i.brandOrderNumber==this.brandOrderNumber
    })
    let suborder=order.suborders.find((i,index)=>{
      suborderIndex=index
      return  i.suborder==suborderNumber
    })
    if(suborder.items.some(i=>i.received==false)){
      alert(`${"La suborden"} ${suborder.suborder} ${"tiene items pendientes"}`);
    }
    else{
      this.orders.subordercompleted(suborderNumber).subscribe(res=>{
        this.orders.waitingOrders[orderIndex].suborders.splice(suborderIndex,1)
      })
    }
  }

  itemReceived(suborderId,itemId,boolStatus){
    let orderIndex=this.orders.waitingOrders.findIndex(i=>i.brandOrderNumber==this.brandOrderNumber)
    let suborderIndex=this.orders.waitingOrders[orderIndex].suborders.findIndex(i=>i.suborder==suborderId)
    let itemIndex=this.orders.waitingOrders[orderIndex].suborders[suborderIndex].items.findIndex(i=>i.id==itemId)
    if(!boolStatus){
      this.orders.itemReceived(this.brandOrderNumber,suborderId,itemId, boolStatus).subscribe(res=>{
        this.orders.waitingOrders[orderIndex].suborders[suborderIndex].items[itemIndex].received=true;
      })
    }
    if(boolStatus){
      if(confirm("Realmente quieres resaurar este item")){
        this.orders.itemReceived(this.brandOrderNumber,suborderId,itemId, boolStatus).subscribe(res=>{
          this.orders.waitingOrders[orderIndex].suborders[suborderIndex].items[itemIndex].received=false;
        })
      }
    }
  }

  ngOnInit() { }

}
