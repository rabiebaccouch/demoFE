import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allArticles: Article[] = [];
  constructor(private aS: ArticleService) { }

  ngOnInit(): void {
    this.get();
  }
  get() {
    this.aS.get().subscribe((data) => {
      this.allArticles = data;
    });
  }
}
