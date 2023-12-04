import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticle } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly http: HttpClient) {}

  url = 'https://localhost:7178/api/Quiz';


  getQuizes() {
    return this.http.get(this.url)
  }

  getArticles() {
    return this.http.get<IArticle[]>('https://localhost:7178/api/ArticleContoller')
  }



}
