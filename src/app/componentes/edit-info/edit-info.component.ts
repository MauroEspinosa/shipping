import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UserInfoService } from 'src/app/servicios/user-info.service'
import { Router} from '@angular/router'


@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {

  loading=false;

  editInfo=new FormGroup({
    name: new FormControl("",Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("",Validators.required)
  })

  constructor(private userInfo: UserInfoService, private router: Router) {
    this.editInfo.get("name").setValue(this.userInfo.data.info.name);
    this.editInfo.get("email").setValue(this.userInfo.data.info.email);
    this.editInfo.get("phone").setValue(this.userInfo.data.info.phone);
  }

  ngOnInit() {}

  alertNumber(){
    alert("Utilizaremos tu numero para comunicarnos contigo en caso de ser necesario")
  }

  onSubmit(){
    //console.log(this.editInfo.value);
    if(this.editInfo.valid){
      this.loading=true;
      this.userInfo.updateUserInfo(this.editInfo.value).subscribe(
        res=>{this.userInfo.data.info=res; this.router.navigate(['/perfil/info'])},
        err=>alert("Algo salio mal. Intentalo mas tarde")
      )
    }

    else{
      alert("Llena todos los campos correctamente");
    }
  }

}
