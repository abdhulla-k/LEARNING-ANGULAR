import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [AccountService]
})
export class AppComponent implements OnInit {
  serverElements = [{ type: 'server', name: 'test', content: 'just a test'}];
  accounts: { name: string, status: string }[] = [];
  @ViewChild('f') signupForm: NgForm; // this is created to get the local reference 'f' from form section
  defaultUserName = "pet";
  defaultEmail = "pet@gmail.com";
  defaultQuestion = "Your first pet?";
  suggestedName = 'sample';
  genders: string[] = [
    'male',
    'female',
    'transgender',
    'other'
  ];

  // reactive form properties below
  reactiveSignupForm: FormGroup;

  constructor( private accountService: AccountService ) {

  }

  ngOnInit(): void {
      this.accounts = this.accountService.accounts;

      // reactive form section below
      this.reactiveSignupForm = new FormGroup({
        'userData': new FormGroup({  // nested form
          'Username': new FormControl( null, Validators.required ),
          'email': new FormControl( null, [ Validators.required, Validators.email ] )
        }),
        'gender': new FormControl( 'male', Validators.required ),
        'hobbies': new FormArray([])
      })
  }

  onServerAdded( serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBlueprintAdded( blueprintData: { blueprintName: string, blueprintContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent,
    })
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice( 0, 1 );
  }

  // learnig about services
  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];

  // accounts: { name: string, status: string }[] = [];

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }

  onAccountAdded(newAccount: {name: string, status: string}) {
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  }


  // learning about forms
  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  // }

  suggestUserName() {
    console.log( this.signupForm );
    this.signupForm.form.patchValue({
      userData: {
        username: this.suggestedName
      }
    })
  }

  onSubmit() {
    this.signupForm.reset()
  }

  // reactive form's functions below
  onSubmitReactive() {
    console.log( this.reactiveSignupForm );
  }

  onAddHobby() {
    // It will add a new object of form control to form array
    const control = new FormControl( null, Validators.required );
    (<FormArray>this.reactiveSignupForm.get( 'hobbies' )).push(control)
  }

  getControls() {
    // this will get or get access all controls or all hobbies user added to array
    // return (<FormArray>this.reactiveSignupForm.get('hobbies')).controls;
    // another method 
    return ( this.reactiveSignupForm.get('hobbies') as FormArray ).controls;
  }
}