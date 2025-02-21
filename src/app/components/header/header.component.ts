import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuItems = ['Sobre', 'Projetos', 'Blog', 'Contato', 'Idioma'];
  selectedItem:string = '';

  setAtcive(item:string){
    this.selectedItem = item;
  }
}
