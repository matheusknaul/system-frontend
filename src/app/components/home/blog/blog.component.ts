import { Component } from '@angular/core';
import { CardBlogComponent } from '../../card-blog/card-blog.component';

@Component({
  selector: 'app-blog',
  imports: [CardBlogComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts=[{
    "title": "Turn Based RPG",
    "imagePath": "",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde culpa dicta explicabo ipsum voluptas nihil qui modi aliquid praesentium nemo libero, omnis quidem temporibus. Alias ducimus est cum blanditiis nisi?",
    "date": "26 de Junho",
    "numberComments": "2"
  }]
}
