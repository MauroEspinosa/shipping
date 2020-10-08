import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WaitingOrdersService } from 'src/app/servicios/admin-services/waiting-orders.service';
import { SearchbarService } from 'src/app/servicios/admin-services/searchbar.service';

@Component({
  selector: 'app-terminated-orders-container',
  templateUrl: './terminated-orders-container.component.html',
  styleUrls: ['./terminated-orders-container.component.css']
})
export class TerminatedOrdersContainerComponent implements OnInit {
  number: string;

  constructor(private router: Router, private orders: WaitingOrdersService,  private searchbar: SearchbarService) {
  }

  ngOnInit() {
  }

  search(){
    this.searchbar.searchString=this.number;
  }
}
