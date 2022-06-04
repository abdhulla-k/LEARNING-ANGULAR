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
  username: string = '';
  showSelector: boolean = true;
  paraName = '';
  log1 = [];
  odd: number[] = [];
  even: number[] = [];

  onClic() {
    this.showSelector = !this.showSelector;
    this.log1.push(this.log1.length + 1);
  }

  onIntervalFired( firedNumber: number ) {
    ( firedNumber % 2 === 0 ) ? this.even.push( firedNumber ) : this.odd.push( firedNumber );
  }
}
