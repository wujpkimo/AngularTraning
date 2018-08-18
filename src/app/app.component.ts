import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './articles.service';
import { Observable } from 'rxjs';

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
  list$: Observable<any[]>;

  get keyword() {
    return this.articlesService.keyword;
  }

  constructor(public articlesService: ArticlesService) {
    // this.list = this.articlesService.list;
  }

  ngOnInit() {
    // this.articlesService.loadArticles();
    this.list$ = this.articlesService.getArticles();
  }

}
