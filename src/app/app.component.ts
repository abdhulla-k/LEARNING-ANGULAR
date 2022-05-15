import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  // we can add inline style. user styles insted of using styleUrls. Eg.
  styles: [`
     h1{
       color: dodgerblue;
     }
  `]

})
export class AppComponent {
}
