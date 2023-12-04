import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly http: HttpClient) {}

  url = 'https://localhost:7178/api/Quiz';


  getQuizes() {
    return this.http.get(this.url)
  }



}
