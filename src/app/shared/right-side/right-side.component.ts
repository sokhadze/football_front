import { Component, OnInit } from '@angular/core';
import {NetworkingService} from '../../services/networking.service';
import {ArticleModel} from '../../models/article.model';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent implements OnInit {
  resultsLength: 0;
  pageSize: 0;
  articles = [];
  page = 1;
  constructor(private network: NetworkingService) { }

  ngOnInit() {
    this.getArticles(this.page);
  }

  getArticles(page?: number) {
    this.network.getRequest(`/articles?page=${page}`)
      .subscribe(
        (data: []) => {
          console.log(data);
          this.resultsLength = data['total'];
          this.pageSize = data['per_page'];

          // this.articles.push(data['data']);

          if (this.page <= 7) {
            data['data'].forEach(
              (article) => {
                this.articles.push(article);
                console.log(article);
              }
            );
            this.page = this.page + 1;
          } else {
            return;
          }
          // data['data'].forEach(
          //   (item: any) => {
          //     this.articles = item;
          //   }
          // );
        }
      );
  }

}
