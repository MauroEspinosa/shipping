import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnInit {

  hide=true;

  constructor() { }

  ngOnInit() {}

  hideSubmenu(){
   this.hide ? setTimeout(()=>{this.hide=false}, 300) : this.hide=true
  }

}
