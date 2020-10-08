import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { SelectedStoreService } from 'src/app/servicios/selected-store.service';

@Component({
  selector: 'app-search-store',
  templateUrl: './search-store.component.html',
  styleUrls: ['./search-store.component.css']
})
export class SearchStoreComponent implements OnInit {
  store: string;

  constructor(private selectedStore: SelectedStoreService, private auth : AuthService) { 
    this.selectedStore.store=undefined
  }

  ngOnInit() {
  }

  selectStore(){
    this.selectedStore.store=this.store;
  }

  logout(){
    this.auth.logout();
  }
}
