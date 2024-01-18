import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  BaseURI = 'https://localhost:7165/api';

  login(formData: any) {
    var fd = new FormData();
    fd.append('userName', formData.UserName);
    fd.append('password', formData.Password);
    return this.http.post(this.BaseURI + '/Auth/Login', fd);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/User/GetUserDetails');
  }
}
