import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // menuItems = ['Sobre', 'Projetos', 'Blog','Currículo', 'Contato', 'Idioma'];
  selectedItem:string = '';

  setActive(item:string){
    this.selectedItem = item;
    console.log(item);
  }

  menuItems = [
    {
      "name": "Sobre",
      "link": "#"
    },
    {
      "name": "Projetos",
      "link": "/projects"
    },
    {
      "name": "Blog",
      "link": "/blog"
    },
    {
      "name": "Currículo",
      "link": "/resume"
    },
    {
      "name": "Contato",
      "link": "/contact"
    },
    {
      "name": "Idioma",
      "link": ""
    }
  ]
}
