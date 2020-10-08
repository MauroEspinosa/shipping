import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UserInfoService } from 'src/app/servicios/user-info.service'
import { Router, ActivatedRoute} from '@angular/router'
import { routeAnimations } from  '../../animatios'
import { validCP } from 'src/app/shared/validators'


@Component({
  selector: 'app-add-direction',
  templateUrl: './add-direction.component.html',
  styleUrls: ['./add-direction.component.css'],
  animations: [routeAnimations]
})
export class AddDirectionComponent implements OnInit {

  loading=false;
  geolocated=false;
  newDirection:boolean;
  directionIndex:any;

  addDirection=new FormGroup({
    _id: new FormControl(""), //necessary for line 37 can work
    nombre: new FormControl("",Validators.required),
    calle: new FormControl("", Validators.required),
    colonia: new FormControl("",Validators.required),
    cp: new FormControl("",[Validators.required,validCP]),
    delegacion: new FormControl("",Validators.required),
    latitud: new FormControl(""),
    longitud: new FormControl("")
  })

  constructor(private userInfo: UserInfoService, private router: Router, private activeRoute:ActivatedRoute){
    this.directionIndex=this.activeRoute.snapshot.paramMap.get('id');
    if(this.directionIndex!=null){
      this.newDirection=false;
      this.addDirection.setValue(this.userInfo.data.directions[this.directionIndex])}
    else{
      this.newDirection=true;}
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.addDirection.value);
    if(this.addDirection.valid && this.newDirection==true){
      this.loading=true;
      this.userInfo.addDirection(this.addDirection.value).subscribe(
        res=>{this.userInfo.data.directions.push(res);
              this.router.navigate(['/perfil/info'])},
        err=>alert("Algo salio mal. Intentalo mas tarde")
      )
    }
    if(this.addDirection.valid && this.newDirection==false){
      this.loading=true;
      this.userInfo.updateDirection(this.addDirection.value).subscribe(
        res=>{this.userInfo.data.directions[this.directionIndex]=this.addDirection.value;
              this.router.navigate(['/perfil/info'])},
        err=>alert("Algo salio mal. Intentalo mas tarde")
      )
    }
    if(!this.addDirection.valid){
      alert("Llena todos los campos correctamente");
    }
  }

  geolocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.addDirection.get("latitud").setValue(position.coords.latitude);
        this.addDirection.get("longitud").setValue(position.coords.longitude);
        this.geolocated=true;
      })
    } 
    else {
      alert("Geolocation no es soportada por tu navegador.");
    }
  }
}
