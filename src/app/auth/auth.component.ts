import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";

import { AuthService, AuthResponseData } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error = null;

    constructor( private authService: AuthService ) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit( form: NgForm ) {
        const email = form.value.email;
        const password = form.value.password;
        let outhObs : Observable<AuthResponseData>;

        if( !form.valid ) {
            return;
        }

        this.isLoading = true;

        // check is it login or signup request
        if( this.isLoginMode ) {
            outhObs = this.authService.login( email, password );

        } else {
            outhObs = this.authService.signUp( email, password );
        }

        // subscribing to both signup ang login observables
        outhObs.subscribe(
            resData => {
                this.isLoading = false;
                console.log( resData )
            },
            error => {
                this.isLoading = false;
                this.error = error;
                console.log(error)
            }
        )

        form.reset();
    }
}