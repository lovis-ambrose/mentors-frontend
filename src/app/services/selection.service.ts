import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  private selectedItemSubject = new BehaviorSubject<string>('Category');
  selectedItem$ = this.selectedItemSubject.asObservable();

  constructor() { }

  setSelectedItem(item: string){
    this.selectedItemSubject.next(item);
  }
}
