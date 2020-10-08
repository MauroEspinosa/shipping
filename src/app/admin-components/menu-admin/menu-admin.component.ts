import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from 'src/app/servicios/admin-services/auth-admin.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  constructor(private adminAuth: AuthAdminService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem("adminToken_myapp")
    this.adminAuth.adminRole=false
    this.router.navigate(["/admin-login"])
  }

  check(){
    this.http.get("http://localhost:8080/admin/check").subscribe(res=>{
      console.log(res);
      
    })
  }
}
