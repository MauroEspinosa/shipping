import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { passwordConfirm } from 'src/app/shared/validators'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  /*placeholders={placeholderemail: "Email", placeholderpassword:"Contraseña", placeholderconfirm:"Confirmar contraseña", concatstring: ""}

  newSignup=new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("",Validators.required),
    confirm: new FormControl("", Validators.required)
  },{validators: passwordConfirm})

  constructor(private auth: AuthService) { }

  ngOnInit() {}

  inputChange(event){
    this.auth.signup=this.newSignup.value;
    this.newSignup.valid ? this.auth.valid=true : this.auth.valid=false

    if(this.newSignup.get(event).hasError("required")) {
      this.placeholders.concatstring="placeholder";
      this.placeholders.concatstring=this.placeholders.concatstring+event;
      this.placeholders[this.placeholders.concatstring]="*Llena este campo"
    } 
  }*/
}
