import { Component } from '@angular/core';

@Component({
  selector: 'app-portofilo',
  templateUrl: './portofilo.component.html',
  styleUrls: ['./portofilo.component.css'],
})
export class PortofiloComponent {
  projects :any[];
  constructor(){
    this.projects=[
      'WEB DESIGN',
      'MOBILE DESIGN',
      'LOGO DESIGN',
      'WEB APPLICATION DEVELOPMENT',
      'MOBILE APPLICATION DEVELOPMENT ',
      'PWA DEVELOPMENT',
    ]
  }
}
