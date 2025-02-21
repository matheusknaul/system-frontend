import { Component } from '@angular/core';
import { CardProjectComponent } from '../../card-project/card-project.component';

@Component({
  selector: 'app-projects',
  imports: [CardProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      "name": "Projeto 1",
      "imagePath": "",
      "technologies": ['Angular', 'Java', 'HTML/CSS']
    },
    {
      "name": "Projeto 2",
      "imagePath": "",
      "technologies": ['ReactJS', 'Python', 'HTML/CSS']
    },
    {
      "name": "Projeto 3",
      "imagePath": "",
      "technologies": ['Angular', 'Java/Spring Boot', 'HTML/CSS']
    }
  ]
}
