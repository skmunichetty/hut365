import { Component, Renderer2, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit {
  

  constructor(private renderer: Renderer2,
              private router: Router) {} 
  
  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', '#ff9999');
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/auth/login']);
  }
}