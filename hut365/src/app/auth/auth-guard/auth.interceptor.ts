import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service'; 

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router, private cookieService: CookieService ) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('token') != null) {
        // if (this.cookieService.check('token') != null) {
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
                // headers: req.headers.set('Authorization', 'Bearer ' + this.cookieService.check('token'))
            });
            return next.handle(clonedReq).pipe(
                tap(
                    succ => { },
                    err => {
                        if (err.status == 401){
                            localStorage.removeItem('token');
                            localStorage.removeItem('role');
                            // this.cookieService.delete('token');
                            this.router.navigateByUrl('/auth/login');
                        }
                    }
                )
            )
        }
        else
            return next.handle(req.clone());
    }
}