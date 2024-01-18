import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  adminDetails: any; // Define a variable to store admin details

  constructor(private adminService: AdminService,
              private router: Router) {}

  ngOnInit(): void {
    // Fetch admin details from the API using the AdminService
    this.adminService.getAdminDetails().subscribe(
      (data) => {
        this.adminDetails = data;
      },
      (error) => {
        console.error('Error fetching admin details:', error);
      }
    );
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    // this.cookieService.delete('token');
    this.router.navigate(['/auth/login']);
  }
}