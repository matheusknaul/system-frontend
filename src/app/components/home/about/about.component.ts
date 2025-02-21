import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-about',
  imports: [CardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  skillsCard = [{
    "name":"Frontend",
    "skills": ['Angular', 'Typescript', 'Javascript', 'HTML & CSS']
  },
  {
    "name": "Backend",
    "skills": ['Java/Spring Boot', 'Python/Flask', 'PostgresSQL/MySQL/Maria DB', 'Mongo DB']
  },
  {
    "name": "Others",
    "skills": ['Git/Github', 'Unit Testing', 'Postman', 'Jenkins']
  }];

  
}
