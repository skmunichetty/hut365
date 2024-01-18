import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  BaseURI = 'https://localhost:7165/api';

  getUserProfile() {
    return this.http.get(this.BaseURI + '/User/GetUserDetails');
  }
}
