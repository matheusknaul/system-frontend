import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-blog',
  imports: [],
  templateUrl: './card-blog.component.html',
  styleUrl: './card-blog.component.css'
})
export class CardBlogComponent {
  @Input() title:string = "";
  @Input() imagePath:string = "";
  @Input() description:string = "";
  @Input() date:string = "";
  @Input() numberComments:string = "";
}
