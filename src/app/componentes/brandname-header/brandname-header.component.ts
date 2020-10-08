import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router'

@Component({
  selector: 'brandname-header',
  templateUrl: './brandname-header.component.html',
  styleUrls: ['./brandname-header.component.css']
})
export class BrandnameHeaderComponent implements OnInit {
  brand: string

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.brand=params.store;
    })
  }

}
