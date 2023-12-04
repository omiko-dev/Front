import { Component } from '@angular/core';
import { IArticle, IUser, UserService } from 'src/app/services/user.service';

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

  articleData = {
    title: '',
    info: ''
  }

  data!: IUser

  publishArticle() {
    var token = localStorage.getItem('token')
    var article: IArticle = {
      articleId: 0,
      title: this.articleData.title,
      describtion: '',
      info: this.articleData.info,
      likeCount: 0,
    };

    this.userService.publishArticle(token!, article).subscribe((data) => {
      console.log(data);
      this.articleData.info = '';
      this.articleData.title = '';
    })

  }

}
