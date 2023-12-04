import { Component } from '@angular/core';
import { IUser, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {

  constructor(private userService: UserService) {
    var token = localStorage.getItem('token');
    this.userService.getUser(token!).subscribe((data) => {
      this.data = data;
    })
  }

  data!: IUser

}
