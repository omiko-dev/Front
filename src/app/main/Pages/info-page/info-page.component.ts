import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { IArticle } from 'src/app/services/user.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
})
export class InfoPageComponent {
  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute) {

    var index = this.activatedRoute.snapshot.params;
    var data = this.activatedRoute.snapshot.queryParams
    this.httpService.getArticles().subscribe((data) => {
      this.articles = data.find(i => i.articleId == index['id']);
      console.log(data);
    });
    console.log(index);

  }

  articles!: IArticle | undefined;


}
