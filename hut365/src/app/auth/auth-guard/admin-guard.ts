import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {
  constructor(private router: Router) {}
  userDetails: any;

  canActivate(): Observable<boolean> {
    var role = localStorage.getItem('role')
    if(role == 'admin'){
      return of(true);
    }
    else {
      this.router.navigate(['/error']);
      return of(false);
    }    
  }
}
