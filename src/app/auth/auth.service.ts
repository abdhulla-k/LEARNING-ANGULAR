import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
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
        .pipe( catchError( errorRes => {
            
            // error handling
            let errorMessage = 'An unknown error occurred!'
            if( !errorRes.error || !errorRes.error.error ) {
                return throwError( errorMessage );
            }

            switch( errorRes.error.error.message ) {
                case 'EMAIL_EXISTS':
                    errorMessage = 'This email exists allready'
            }
            return throwError( errorMessage );
        }));
    };
}