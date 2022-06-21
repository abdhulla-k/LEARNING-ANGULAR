import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";

import { AuthService, AuthResponseData } from "./auth.service";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {
    isLoginMode = true;
    isLoading = false;
    error = null;
    @ViewChild( PlaceholderDirective ) alertHost: PlaceholderDirective

    private closeSub: Subscription

    constructor( 
        private authService: AuthService, 
        private router: Router,
        private componetFactoryResolver: ComponentFactoryResolver
    ) {}

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
                this.router.navigate(['/recipes'])
                console.log( resData )
            },
            error => {
                this.isLoading = false;
                this.error = error;
                this.showErrorAlert( error );
                console.log(error)
            }
        )

        form.reset();
    }

    onHandleError() {
        this.error = null;
    }

    private showErrorAlert( error: string ) {
        const alertComponentFactory = this.componetFactoryResolver.resolveComponentFactory(
            AlertComponent 
        );

        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear()
        const componentRef = hostViewContainerRef.createComponent( alertComponentFactory );


        componentRef.instance.message = error;
        this.closeSub = componentRef.instance.errorHandled.subscribe(() => {
            this.closeSub.unsubscribe();
            hostViewContainerRef.clear();
        })
    }

    ngOnDestroy(): void {
        if( this.closeSub ) {
            this.closeSub.unsubscribe();
        }
    }
}