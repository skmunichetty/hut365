import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared/auth.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  formModel = {
    UserName: '',
    Password: ''
  }
  constructor(private service: AuthService, 
              private router: Router, 
              private toastr: ToastrService, 
              private renderer: Renderer2,
              private cookieService: CookieService ) { }

  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', '#04c582');
    if (localStorage.getItem('token') != null)
    // if (this.cookieService.check('token') != null) 
      this.router.navigateByUrl('/home');
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        // this.cookieService.set('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
        if (err.status == 400 || err.status == 401)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }
}
