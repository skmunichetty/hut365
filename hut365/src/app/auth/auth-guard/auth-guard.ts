import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {


  constructor(private router: Router, private cookieService: CookieService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token') != null)
    // if (this.cookieService.check('token') != null) 
      return true;
    else {
      this.router.navigate(['/auth/login']);
      return false;
    }

  }
}
