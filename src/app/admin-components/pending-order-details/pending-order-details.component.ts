import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinishedOrdersService } from 'src/app/servicios/admin-services/finished-orders.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { routeAnimations } from  '../../animatios'

@Component({
  selector: 'app-pending-order-details',
  templateUrl: './pending-order-details.component.html',
  styleUrls: ['./pending-order-details.component.css'],
  animations: [routeAnimations]
})
export class PendingOrderDetailsComponent implements OnInit {

  orderItems: Array<{color: string,
                    confirmed: boolean,
                    details: string,
                    id: string,
                    imageLink: string,
                    itemTitle: string,
                    link: string,
                    rejected: boolean,
                    size: string}>

  orderId;
  prompt=false;
  promptType;

  itemIndex;
  suborderIndex;
  orderIndex;
  suborderId;
  itemId;

  cancelReason=new FormGroup({
    reason: new FormControl("",Validators.required)
  })

  itemPrice=new FormGroup({
    price: new FormControl("",Validators.required)
  })
  
  brandOrderNumber=new FormGroup({
    orderNumber: new FormControl("", Validators.required)
  })

  constructor(private router: Router ,private route: ActivatedRoute, private orders: FinishedOrdersService) { 
    this.route.paramMap.subscribe(res=>{
      this.orderId=res.get("id");
      let index=this.orders.finishedOrders.findIndex(i=>i._id==this.orderId)
      if(index!=-1){
        this.orderIndex=index
        this.updateItemsList(this.orderId)}
      else this.router.navigateByUrl('admin/(pendientes//sidebar:control)')
    });
  }

  updateItemsList(orderId){
    this.orderItems=[];
    let order=this.orders.finishedOrders.find(i=>i._id==orderId)
    order.suborders.reduce((acc, el, index) => {
      let suborderID=el._id
      let suborderMainIndex=index
      el.items.reduce((acc2,el, index2)=>{
        el["suborderId"]=suborderID
        el["suborderMainIndex"]=suborderMainIndex
        el["itemMainIndex"]=index2
        this.orderItems.push(el)
        return acc2
      },[])
      return acc
    }, []);
  }


  confirmItem(){
    if(this.itemPrice.valid){
      this.orders.confirmItem(this.suborderId,this.itemId, this.itemPrice.get("price").value).subscribe(
        res =>{
          this.orders.finishedOrders[this.orderIndex].suborders[this.suborderIndex].items[this.itemIndex].confirmed=true
          this.prompt=false
          this.itemPrice.reset()
        },
        err => alert("Algo salio mal. intentalo mas tarde")
      )
    }
  }

  rejectItem(){
    if(this.cancelReason.valid){
      this.orders.rejectItem(this.suborderId,this.itemId, this.cancelReason.get("reason").value).subscribe(res=>{
        this.orders.finishedOrders[this.orderIndex].suborders[this.suborderIndex].items[this.itemIndex].rejected=true
        this.prompt=false
        this.cancelReason.reset()
      })
    }
  }

  restoreItem(suborderId,itemId,suborderMainIndex,itemMainIndex){
    this.setIndexes(suborderId,itemId,suborderMainIndex,itemMainIndex)
    this.orders.restoreItem(suborderId, itemId).subscribe(res=>{
      this.orders.finishedOrders[this.orderIndex].suborders[this.suborderIndex].items[this.itemIndex].confirmed=false
      this.orders.finishedOrders[this.orderIndex].suborders[this.suborderIndex].items[this.itemIndex].rejected=false
    })
  }

  showPrompt(suborderId,itemId,suborderMainIndex,itemMainIndex,promptType){
    this.setIndexes(suborderId,itemId,suborderMainIndex,itemMainIndex)
    this.promptType=promptType
    this.prompt=true
  }

  hidePrompt(){
    this.prompt=false
    this.itemPrice.reset()
  }

  setIndexes(suborderId,itemId,suborderMainIndex,itemMainIndex){
    this.itemIndex=itemMainIndex
    this.suborderIndex=suborderMainIndex
    this.suborderId=suborderId
    this.itemId=itemId
  }

  finishOrder(){
    if (this.orderItems.filter(i=>i.rejected==false && i.confirmed==false).length == 0){
      if(this.brandOrderNumber.valid)
        this.orders.finishOrder(this.orderId, this.brandOrderNumber.get("orderNumber").value).subscribe(res=>{
          this.orders.finishedOrders.splice(this.orderIndex,1)
          this.router.navigateByUrl('admin/(pendientes//sidebar:control)')})
      else alert("Introduce un numero de orden valido")}
    else{
      alert("Faltan items por revisar")}   
  }

  ngOnInit() { }

}