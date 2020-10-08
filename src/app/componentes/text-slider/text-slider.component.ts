import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, group,keyframes, AnimationEvent} from '@angular/animations';


@Component({
  selector: 'text-slider',
  templateUrl: './text-slider.component.html',
  styleUrls: ['./text-slider.component.css'],
  animations: [trigger('swipeTrigger', [
    transition(':enter', [
      style({ opacity:'0', position: "absolute", width: "80%", transform: 'translateX({{EX}}%)' }),
      animate('500ms 0.2s ease', style({ opacity: 1, transform: 'translateX(0)'}))
    ], { params: { EX: 100}}),
    transition(':leave', [
      style({position:"absolute", width: "80%"}),
      animate('500ms 0.2s ease', style({ opacity: 0, transform: 'translateX({{LX}}%)' }))
    ], { params: { LX: -100}})
  ])]
})
export class TextSliderComponent implements OnInit {

  iteracion=0;
  compartir=true;
  enterTranslateX=100;
  leaveTranslateX=-100;

  constructor() { }

  swipeLeft(){
    this.enterTranslateX=100;
    this.leaveTranslateX=-100;
    if(this.iteracion==3){
      this.iteracion=0;
    }
    else{
      this.iteracion++;
    }
  }

  swipeRight(){
    this.enterTranslateX=-100;
    this.leaveTranslateX=100;
    if(this.iteracion==0){
      this.iteracion=3;
    }
    else{
      this.iteracion--;
    }   
  }

  ngOnInit() {}

}
