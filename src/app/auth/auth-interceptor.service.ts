import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, take } from "rxjs/operators";

import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor( private authService: AuthService ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        // subscribing to multipe observable with exhaustMap operator.
        return this.authService.user.pipe(
            take( 1 ),
            exhaustMap( user => {

                // don't modify if the request if the request coming from authentication component.
                // that means someone trying to login or signup
                // that means there is no user logd in.
                if( !user ) {
                    return next.handle( req );
                }

                // modify request if it is fetching request. add tocken
                // only add tocken if there is a user logd in 
                const modifiedReq = req.clone({
                    params: new HttpParams().set( 'auth', user.token )
                });
                return next.handle( modifiedReq )
            })
        )
    }
}