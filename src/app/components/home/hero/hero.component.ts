import { Component } from '@angular/core';
import { ModalCurriculumComponent } from '../../modal-curriculum/modal-curriculum.component';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-hero',
  imports: [ModalComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  isModalOpen = false;

  openModal(){
    this.isModalOpen = true;
  }

  closeModal(){
    this.isModalOpen = false;
  }
}
