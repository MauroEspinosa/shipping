import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/servicios/user-info.service'

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private userData: UserInfoService) { }

  ngOnInit() {
  }

}
