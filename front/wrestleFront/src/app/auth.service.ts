import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const url = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(username: String, password: String) {
    return this.http.post(`${url}/api/auth/register`, {username, password});
  }

  login(username: String, password: String) {
    return this.http.post(`${url}/api/auth/login`, {username, password});
  }

}
