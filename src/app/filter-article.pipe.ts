import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './article';

@Pipe({
  name: 'filterArticle'
})
export class FilterArticlePipe implements PipeTransform {
  transform(articles: Article[], keyword?: string): any {
    if (articles && keyword) {
      return articles.filter(article => article.title.indexOf(keyword) !== -1);
    } else {
      return articles;
    }
  }
}
