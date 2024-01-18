import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    BaseURI = 'https://localhost:7165/api';

  constructor(private http: HttpClient) {}

  getAdminDetails(): Observable<any> {
    return this.http.get(this.BaseURI + '/Admin/GetAdminData');
  }
}