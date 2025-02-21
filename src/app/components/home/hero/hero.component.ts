import { Component } from '@angular/core';
import { ModalCurriculumComponent } from '../../modal/modal-curriculum/modal-curriculum.component';

@Component({
  selector: 'app-hero',
  imports: [ModalCurriculumComponent],
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
