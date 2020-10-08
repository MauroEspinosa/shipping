import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
import { AuthService } from 'src/app/servicios/auth.service';
import { routeAnimations } from  '../../animatios'


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [routeAnimations]
})
export class MenuComponent implements OnInit {

  state=false;
  modifyMenu=false;

  constructor(private router: Router, private auth : AuthService) {
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        this.router.isActive("/perfil",false) ? this.modifyMenu=true : this.modifyMenu=false
      }
    })
  }

  ngOnInit() {
  }

  logout(){
    this.auth.logout()
  }

}
