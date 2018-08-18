import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count: 0;

  @Output()
  keywordChange = new EventEmitter<string>();

  keyword = '';

  isHighlight = false;
  fontSize = 24;

  constructor(public articlesService: ArticlesService) {}

  ngOnInit() {}

  // search($event) {
  //   console.log($event);
  //   this.highlightTitle = !this.highlightTitle;
  //   ++this.fontSize;
  // }
  buttonClick($event) {
    this.articlesService.searchArticles(this.keyword);
    this.isHighlight = !this.isHighlight;
    this.fontSize += 2;
    ++this.count;
    console.log(this.keyword);
    console.log(this.count);
  }
}
