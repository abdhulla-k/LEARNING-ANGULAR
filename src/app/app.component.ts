import { Component, OnInit, ViewChild } from '@angular/core';

import { UserService } from './users.service';
import { CounterService } from './counter.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  // we can add inline style. user styles insted of using styleUrls. Eg.
  styles: [`
     h1{
       color: dodgerblue;
     }
  `],
  providers: [
    UserService,
    CounterService
  ]

})
export class AppComponent implements OnInit {
  username: string = '';
  showSelector: boolean = true;
  paraName = '';
  log1 = [];
  odd: number[] = [];
  even: number[] = [];
  @ViewChild('f') userData: NgForm;
  userChoice = false;
  userDataSaved = {
    username: '',
    email: '',
    userChoice: ''
  }

  // reactive form assignment
  signupForm : FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'projectName' : new FormControl( 'just a name', [ Validators.required, this.forbiddenProject] ),
      'emailReactive': new FormControl( 'test@gmail.com', [ Validators.required, Validators.email ] ),
      'typeProject': new FormControl( null, )
    })
  }

  onClic() {
    this.showSelector = !this.showSelector;
    this.log1.push(this.log1.length + 1);
  }

  onIntervalFired( firedNumber: number ) {
    ( firedNumber % 2 === 0 ) ? this.even.push( firedNumber ) : this.odd.push( firedNumber );
  }

  // service assignment
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }

  onSubmit() {
    this.userDataSaved.username = this.userData.value.username;
    this.userDataSaved.email = this.userData.value.email;
    this.userDataSaved.userChoice = this.userData.value.modeChoose;
    console.log( this.userData );
  }

  printUserData() {
    this.userChoice = !this.userChoice;
  }

  // functions of reactive form
  onSubmitReactive() {
    console.log( this.signupForm );
  }

  forbiddenProject( control: FormControl ): {[ s: string] : boolean} {
    if( control.value === 'test' ) {
      return { 'forbiddenProjectName' : true };
    }
    return null
  }
}
