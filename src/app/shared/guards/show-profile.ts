import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class ShowProfile implements CanActivate{

    constructor(private http : HttpClient, private router: Router) { }

    canActivate() {
        let request = new Promise<boolean>((resolve, reject)=>{
            this.http.get("http://localhost:8080/auth-me").subscribe(
                res=>resolve(true),
                err=>this.router.navigate(["/login"])
            )
        })
        
       return request
    }
}