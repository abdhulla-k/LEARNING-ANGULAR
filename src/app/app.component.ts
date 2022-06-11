import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor( private accountService: AccountService ) {

  }

  ngOnInit(): void {
      this.accounts = this.accountService.accounts;
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
}