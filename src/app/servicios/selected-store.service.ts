import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedStoreService {
  store: string
  constructor() { }
}
