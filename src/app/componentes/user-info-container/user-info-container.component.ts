import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/servicios/user-info.service'


@Component({
  selector: 'app-user-info-container',
  templateUrl: './user-info-container.component.html',
  styleUrls: ['./user-info-container.component.css']
})
export class UserInfoContainerComponent implements OnInit{

  constructor(private userInfo: UserInfoService){
    if(!userInfo.data) this.userInfo.getUserInfo()
  }

  ngOnInit() {}

}
