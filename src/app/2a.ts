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
    console.log('Hello everyone!')
    this.name = 'Wisesa'  
    // name will be changed from 'Lintang' to 'Wisesa'
  }
}
