import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/servicios/user-info.service'

@Component({
  selector: 'pagos-info',
  templateUrl: './pagos-info.component.html',
  styleUrls: ['./pagos-info.component.css']
})
export class PagosInfoComponent implements OnInit {

  visible:any;

  constructor(private userData: UserInfoService) { }

  ngOnInit() {
  }

  toggleSlide(item){
    this.visible==item ? this.visible="" : this.visible=item;
  }

}
