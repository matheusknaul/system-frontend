import { Component, inject, Input, Output } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
