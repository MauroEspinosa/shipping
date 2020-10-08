import { Component, OnInit } from '@angular/core';
import { ReceivedSubordersService } from 'src/app/servicios/admin-services/received-suborders.service';
import { routeAnimations } from 'src/app/animatios'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchbarService } from 'src/app/servicios/admin-services/searchbar.service';

@Component({
  selector: 'app-received-suborders',
  templateUrl: './received-suborders.component.html',
  styleUrls: ['./received-suborders.component.css'],
  animations: [routeAnimations]
})
export class ReceivedSubordersComponent implements OnInit {

  showPrompt=false;
  suborderId: string;
  deliveryMan= new FormGroup({
    id: new FormControl("", Validators.required)
  })

  constructor(private orders: ReceivedSubordersService, private searchbar: SearchbarService) { }

  ngOnInit() {
  }

  saveSuborderId(suborderId){
    this.showPrompt ? this.showPrompt=false : this.showPrompt=true
    this.suborderId=suborderId
  }

  assignDelivery(){
    if(this.deliveryMan.valid){
      this.orders.deliveryAssigned(this.suborderId, "sent").subscribe(res=>{
        let suborderIndex=this.orders.receivedSuborders.findIndex(i=>i.suborder==this.suborderId)
        this.orders.receivedSuborders[suborderIndex].status="sent";
        this.showPrompt ? this.showPrompt=false : this.showPrompt=true
      })
    }
  }

}
