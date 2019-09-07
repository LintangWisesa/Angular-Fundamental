import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basic';
  name = 'Lintang';
  nama:string = 'simplinnovation'

  constructor(){
    this.ubahName('Lintang Wisesa')
  }

  ubahName(x:string):void {
    this.name = x
  }
}
