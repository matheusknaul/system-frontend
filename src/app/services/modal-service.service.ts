import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  private modalVisibilitySubject = new BehaviorSubject<boolean>(false);

  modalVisibility$ = this.modalVisibilitySubject.asObservable();

  constructor() { }

  openModal(){
    this.modalVisibilitySubject.next(true);
  }

  closeModal(){
    this.modalVisibilitySubject.next(false);
  }
}
