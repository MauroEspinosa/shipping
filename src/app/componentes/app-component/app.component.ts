import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthAdminService } from 'src/app/servicios/admin-services/auth-admin.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { routeAnimations } from  '../../animatios'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeAnimations]
})

export class AppComponent {
  title = 'envios';

  constructor(private http: HttpClient, private auth : AuthService, private adminAuth: AuthAdminService, private router: Router){
    this.http.get("http://localhost:8080/auth-me").subscribe(
      res => this.auth.isLogged=true,
      err => {if(err.status==401) this.auth.isLogged=false}
    )
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
