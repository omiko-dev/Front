import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IArticle } from 'src/app/services/user.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent {

  constructor(private httpService: HttpService) {
    this.httpService.getArticles().subscribe((data) => {
      this.articles = data
    })
  }

  articles!: IArticle[]

}
