import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AccountService } from './accounts.service';
import { Post } from './post.model';
import { PostsService } from './posts.service';

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

  // related to pipe
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];

  filteredStatus = '';

  // reactive form properties below
  reactiveSignupForm: FormGroup;
  forbiddenUsernames = [ 'text', 'user' ];

  // http
  loadedPosts: Post[] = [];
  isFetching = false;
  @ViewChild( 'postForm' ) postForm: NgForm

  constructor( private accountService: AccountService,
               private http: HttpClient,
               private postsService: PostsService ) {

  }

  ngOnInit(): void {
      this.accounts = this.accountService.accounts;
      this.isFetching = true
      this.onFetchPosts();

      // reactive form section below
      this.reactiveSignupForm = new FormGroup({
        'userData': new FormGroup({  // nested form
          'Username': new FormControl( null, [ Validators.required, this.forbiddenNames.bind( this ) ] ),
          'email': new FormControl( null, [ Validators.required, Validators.email ], this.forbiddenEmail )
        }),
        'gender': new FormControl( 'male', Validators.required ),
        'hobbies': new FormArray([])
      })

      // valueChanges and statusChanges are observables
      this.reactiveSignupForm.valueChanges.subscribe(
        (value) => console.log( value )
      )
      this.reactiveSignupForm.get( 'email' ).statusChanges.subscribe(
        ( value ) => console.log( value )
      )
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
    this.reactiveSignupForm.setValue(
      {
        'userData': {
          'Username': '',
          'email': ''
        },
        'gender': '',
        'hobbies': []
      }
    )
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

   // this function is a  custome requirement or validation function
  forbiddenNames( control: FormControl ):{ [ s: string]: boolean } {
    if( this.forbiddenUsernames.indexOf( control.value ) !== -1 ) {
      return { 'nameIsForbidden': true };
    }
    return null
  }

  forbiddenEmail( control: FormControl ): Promise<any> | Observable<any> {
    const promise = new Promise<any>(( resolve, reject ) => {
      setTimeout(() => {
        if( control.value === 'test@gmail.com' ) {
          resolve({ 'emailIsForbidden': true });
        } else {
          resolve( null );
        }
      }, 1500 );
    })
    return promise
  }

  // related to pipe
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer() {
    this.servers.push(
      {
        instanceType: 'small',
        name: 'Test server',
        status: 'stable',
        started: new Date( 25, 11, 2000 )
      }
    )
  }

  // learning about http

  onCreatePost( postData: Post ) {
    // Send Http request
    this.postsService.createAndSavePost( postData.title, postData.content );
    this.postForm.reset()
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe( posts => {
      this.loadedPosts = posts
      this.isFetching = false;
    });
  }

  onClearPosts() {
    // Send Http request
  }
}