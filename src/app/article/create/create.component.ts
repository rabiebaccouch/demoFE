import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  articleForm: Article = {
    id: 0,
    designation: '',
    price: 0,
    qte: 0,
  };


  constructor(private aS:ArticleService,
    private router:Router) { }

  ngOnInit(): void {
  }

  create(){
    this.aS.create(this.articleForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/article/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }  

}
