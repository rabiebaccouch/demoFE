import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Article[]>('http://127.0.0.1:8080/article');
  }
  create(a: Article) {
    return this.http.post<Article[]>('http://127.0.0.1:8080/article',a);
  }
}
