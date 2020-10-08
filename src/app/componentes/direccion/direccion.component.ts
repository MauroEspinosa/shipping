import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/servicios/user-info.service'

@Component({
  selector: 'direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {

  constructor(private userData: UserInfoService) { }

  ngOnInit() {
  }

}
