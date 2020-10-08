import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';
import { AuthAdminService } from '../../servicios/admin-services/auth-admin.service';

@Injectable()
export class AdminRoleCheck implements CanActivateChild {

    constructor(private authAdminService: AuthAdminService, private router: Router, private http: HttpClient) { }

    async canActivateChild() {
        if(this.authAdminService.adminRole===undefined){
            let value = new Promise<boolean>((resolve, reject)=>{
                this.http.get("http://localhost:8080/admin/auth").subscribe(
                    res=> {this.authAdminService.adminRole=true; resolve(true)},
                    err => {if(err.status==401) this.authAdminService.adminRole=false; resolve(false)}
                )
            })
            let allowed = await value
            if(allowed) return true
            if(!allowed) {this.router.navigate(["/admin-login"]); return false}
        }

        return this.authAdminService.adminRole
    }
}