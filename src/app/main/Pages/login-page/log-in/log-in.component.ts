import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILogIn } from 'src/app/main/Interfaces/ILogIn';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  constructor(private auth: AuthService, private _router: Router) {}
  validator: boolean = false;

  email: string = '';
  password: string = '';

  login() {
    if (this.email.includes('@') && this.password != null) {
      const user: ILogIn = {
        email: this.email,
        password: this.password,
      };

      this.auth.login(user).subscribe(
        (data) => {
          var token = data;
          localStorage.setItem('token', token);
          this._router.navigate(['/'])
        },
        (err) => {
          this.validator = true;
        }
      );
      this.email = '';
      this.password = '';
    }
  }
}
