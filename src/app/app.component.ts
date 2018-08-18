import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './articles.service';
import { Observable } from 'rxjs';
import { Articles } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'conduit';
  subtitle = 'A place to share your <u>knowledge</u>.';

  // list: any[];
  // get list() {
  //   return this.articlesService.list;
  // }
  articles: Articles;
  list$: Observable<Articles[]>;

  get keyword() {
    return this.articlesService.keyword;
  }

  // 建構子
  constructor(public articlesService: ArticlesService) {
    // this.list = this.articlesService.list;
  }

  ngOnInit() {
    // this.articlesService.loadArticles();
    this.list$ = this.articlesService.getArticles();
  }
}
