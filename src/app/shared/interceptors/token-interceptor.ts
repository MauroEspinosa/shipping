import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from "rxjs/internal/operators";
import { AuthAdminService } from 'src/app/servicios/admin-services/auth-admin.service';
import { AuthService } from 'src/app/servicios/auth.service';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public router:Router, private auth : AuthService, private authAdmin: AuthAdminService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authToken= localStorage.getItem("myapp_token") ? localStorage.getItem("myapp_token") : ""
    let adminToken = localStorage.getItem("adminToken_myapp") ? localStorage.getItem("adminToken_myapp") : "";

    if(req.url.indexOf("/admin")!=-1) authToken = adminToken

    const authReq = req.clone({
      headers: req.headers.set('x-auth-token', authToken)
    });

    //manualy handle error responses
    if(req.url==="http://localhost:8080/auth-me" || req.url==="http://localhost:8080/admin/auth" || req.url==="http://localhost:8080/admin/login"){
      return next.handle(authReq)
    }

    
    return next.handle(authReq).pipe(tap(() => { },
      (err: HttpErrorResponse) => {
        if (err && (err.status === 401 || err.status === 403)) {
            if(err.message.indexOf("admin")!=-1){
              this.authAdmin.adminRole=false
              this.router.navigate(["/admin-login"])
            }
            else{
              this.auth.isLogged=false
              this.router.navigate(['/login']);
            }
          } else {
            return;
          }
      }
    ))
  }
}
