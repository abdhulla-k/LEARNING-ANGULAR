import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor {
    intercept( req: HttpRequest<any>, next: HttpHandler ) {
        let modifiedReq = req.clone({ headers: req.headers.append( 'auth', 'xyz' )} )
        return next.handle( modifiedReq );
    }
}