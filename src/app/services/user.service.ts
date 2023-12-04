import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  User = null

  getUser(token: string) {
    const Header = { Authorization: `Bearer ${token}` }

    return this.http.get<IUser>('https://localhost:7178/api/User/getUser', {
      headers: Header,
    });
  }

}

export interface IUser {
  name: string;
  email: string;
  point: number;
  rank: string;
  article: IArticle;
}

export interface IArticle {
  id: number,
  title: string,
  describtion: string,
  info: string,
  likeCount: number,
}
