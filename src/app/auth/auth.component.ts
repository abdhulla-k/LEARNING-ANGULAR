import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true;
    isLoading = false;

    constructor( private authService: AuthService ) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit( form: NgForm ) {
        const email = form.value.email;
        const password = form.value.password;

        if( !form.valid ) {
            return;
        }

        this.isLoading = true;
        if( this.isLoginMode ) {
            // log in
        } else {
            this.authService.signUp( email, password ).subscribe(
                resData => {
                    this.isLoading = false;
                    console.log( resData );
                },
                error => {
                    this.isLoading = false;
                    console.log( error );
                });
            }
            
        form.reset();
    }
}