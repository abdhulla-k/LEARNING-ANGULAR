import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor( private http: HttpClient ) {}

    signUp( email: string, password: string ) {
        return this.http.post<AuthResponseData>( 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYwMrOgop4QDlgTsgFwA9i3RXHoHWbdrk',
        {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe( catchError( this.handleError ));
            
    };

    login( email: string, password: string ) {
        return this.http.post<AuthResponseData>( 
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYwMrOgop4QDlgTsgFwA9i3RXHoHWbdrk',
            { 
                email,
                password, 
                returnSecureToken: true
            }
        ).pipe( catchError( this.handleError ));
    }

    // error handling method
    private handleError( errorRes: HttpErrorResponse ) {
        // error handling
        let errorMessage = 'An unknown error occurred!'
        if( !errorRes.error || !errorRes.error.error ) {
            return throwError( errorMessage );
        }

        switch( errorRes.error.error.message ) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists allready';
                break;

            case 'INVALID_PASSWORD':
                errorMessage = 'invalid password!';
                break;

            case 'EMAIL_NOT_FOUND': 
                errorMessage = 'this user not exists! email not found';
                break;
            
            case 'USER_DISABLED':
                errorMessage = 'your account has been desabled! contact our team.';
                break;

            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                errorMessage = 'try later';
                break;
        }
        return throwError( errorMessage );
    };
}