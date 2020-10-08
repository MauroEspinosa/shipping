import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { routeAnimations } from  '../../animatios'


@Component({
  selector: 'colored-container',
  templateUrl: './colored-container.component.html',
  styleUrls: ['./colored-container.component.css'],
  animations:[routeAnimations]
})
export class ColoredContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
