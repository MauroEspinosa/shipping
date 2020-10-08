import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router'
import { SelectedStoreService } from 'src/app/servicios/selected-store.service';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements OnInit {

  actionText="continuar";
  nextStates={continuar:"buscar",buscar:"resultados",login:"login",signup:"signup"}
  attempt: String;

  constructor(private router: Router, private selectedStore: SelectedStoreService, private auth: AuthService) { 
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        if(this.router.url=="/"){this.actionText="continuar"}
        else {this.actionText=this.router.url.split("/").slice(1,2).toString()
              this.actionText=this.actionText.split("?").slice(0,1).toString();}

        /*if(this.router.url=="/buscar")
          this.selectedStore.store=undefined;*/
      }
    });
  }
  
  ngOnInit(){}

  navigate(){
    this.attempt=this.nextStates[this.actionText];
    /*if(this.attempt=="login")
      this.auth.authAttempt();

    if(this.attempt=="signup")
      this.auth.signupAttempt();*/

    if(this.attempt=="resultados")
      this.selectedStore.store ? this.router.navigate(['/resultados' ],{queryParams:{store:this.selectedStore.store}}) : alert("Selecciona una marca");
        
    if(this.attempt=="buscar")
      this.router.navigate(['/buscar']);
  }  
}
