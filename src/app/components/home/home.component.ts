import { Component, inject, Input, Output } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, ProjectsComponent, BlogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
