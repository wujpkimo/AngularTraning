import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Articles } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  // originalList = [
  //   {
  //     'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  //     'slug': 'zp7yqc',
  // tslint:disable-next-line:max-line-length
  //     'body': 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  //     'createdAt': '2018-05-11T21:58:27.358Z',
  //     'updatedAt': '2018-05-11T21:58:27.358Z',
  //     'tagList': [],
  // tslint:disable-next-line:max-line-length
  //     'description': 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  //     'author': {
  //       'username': 'Eliseo@gardner.biz',
  //       'bio': 'Eliseo',
  //       'image': 'http://placekitten.com/200/300',
  //       'following': false
  //     },
  //     'favorited': false,
  //     'favoritesCount': 1
  //   },
  //   {
  //     'title': 'quo vero reiciendis velit similique earum',
  //     'slug': 'p3vcsw',
  // tslint:disable-next-line:max-line-length
  //     'body': 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
  //     'createdAt': '2018-05-11T21:55:00.722Z',
  //     'updatedAt': '2018-05-11T21:55:00.722Z',
  //     'tagList': [],
  // tslint:disable-next-line:max-line-length
  //     'description': 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
  //     'author': {
  //       'username': 'Jayne_Kuhic@sydney.com',
  //       'bio': 'Jayne_Kuhic',
  //       'image': 'http://placekitten.com/200/300',
  //       'following': false
  //     },
  //     'favorited': false,
  //     'favoritesCount': 3
  //   },
  //   {

  //     'title': 'odio adipisci rerum aut animi',
  //     'slug': '3c69lg',
  // tslint:disable-next-line:max-line-length
  //     'body': 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
  //     'createdAt': '2018-05-11T19:49:35.917Z',
  //     'updatedAt': '2018-05-11T19:49:35.917Z',
  //     'tagList': [],
  // tslint:disable-next-line:max-line-length
  //     'description': 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
  //     'author': {
  //       'username': 'Lew@alysha.tv',
  //       'bio': 'Lew',
  //       'image': 'http://placekitten.com/200/300',
  //       'following': false
  //     },
  //     'favorited': false,
  //     'favoritesCount': 5
  //   }
  // ];

  // list = this.originalList;

  list: any[];
  keyword: string;

  constructor(private httpClient: HttpClient) {}

  // 以同步方式取得資料
  loadArticles() {
    this.httpClient
      .get('https://conduit.productionready.io/api/articles')
      .subscribe((data: Articles) => {
        this.list = data.articles;
      });
  }

  // 以同步方式取得資料，包含pipe filter
  // loadArticles() {
  //   this.httpClient
  //     .get('https://conduit.productionready.io/api/articles')
  //     .pipe(map((response: any) => response.articles));
  // }

  // 以非同步方式取回資料，包含pipe filter
  getArticles(): Observable<any[]> {
    return this.httpClient
      .get('https://conduit.productionready.io/api/articles')
      .pipe(map((data: Articles) => data.articles));
  }

  // searchArticles($event) {
  //   if ($event) {
  //     this.list = this.originalList.filter(alticle => alticle.title.indexOf($event) !== -1);
  //   } else {
  //     this.list = this.originalList;
  //   }
  // }

  searchArticles(keyword: string) {
    this.keyword = keyword;
  }
}
