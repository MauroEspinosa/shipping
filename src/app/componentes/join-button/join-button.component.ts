import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'join-button',
  templateUrl: './join-button.component.html',
  styleUrls: ['./join-button.component.css']
})
export class JoinButtonComponent implements OnInit {


  constructor() { 
  }

  ngOnInit() {
  }

}
