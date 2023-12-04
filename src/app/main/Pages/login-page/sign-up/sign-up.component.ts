import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILogIn } from 'src/app/main/Interfaces/ILogIn';
import { ISignUp } from 'src/app/main/Interfaces/ISignup';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(private auth: AuthService, private _router: Router) {}

  username: string = '';
  password: string = '';
  email: string = '';

  signUp() {
    if (
      this.username.length > 6 &&
      this.password.length > 6 &&
      this.email.includes('@')
    ) {
      var user: ISignUp = {
        email: this.email,
        name: this.username,
        passwordHash: this.password,
      };
      this.auth.signUp(user).subscribe((data) => {
        console.log(data);
      });
      this.username = '';
      this.email = '';
      this.password = '';
    }
  }
}
