import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {
  searchString: string;
  constructor() { }
}
