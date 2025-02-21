import { Component, inject, Input, Output } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
