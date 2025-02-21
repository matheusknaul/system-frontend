import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  imports: [],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css'
})
export class CardProjectComponent {
  @Input() title:string = "";
  @Input() imagePath:string = "";
  @Input() technologies:string[] = [];

}
