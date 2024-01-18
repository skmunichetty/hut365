import { UserService } from '../shared/user.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  userDetails: any;
  adminData: any;

  constructor(private router: Router, 
              private service: UserService, 
              private renderer: Renderer2,
              private cookieService: CookieService) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
        if(this.userDetails.isAdmin)
          this.renderer.setStyle(document.body, 'background-color', '#a7ba73');
        else 
        this.renderer.setStyle(document.body, 'background-color', '#f7f0e1');
      },
      err => {
        console.log(err);
      },
    );
  }


  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    // this.cookieService.delete('token');
    this.router.navigate(['/auth/login']);
  }

  onAdminButtonClick() {
    this.router.navigate(['/admin']);
  }
}
