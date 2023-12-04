import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISignUp } from '../main/Interfaces/ISignup';
import { ILogIn } from '../main/Interfaces/ILogIn';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  signUp(user: ISignUp) {
    return this.http.post('https://localhost:7178/api/Auth/Register', user, {
      responseType: 'text',
    });
  }

  login(user: ILogIn) {
    return this.http.post('https://localhost:7178/api/Auth/Login', user, {
      responseType: 'text',
    });
  }
}
