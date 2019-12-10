import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {NetworkingService} from '../../services/networking.service';
import {ArticleModel} from '../../models/article.model';

@Component({
  selector: 'app-article-show',
  templateUrl: './article-show.component.html',
  styleUrls: ['./article-show.component.css']
})
export class ArticleShowComponent implements OnInit {
  private routeUrlSubscription: Subscription = null;
  newsId: number;
  article: any;
  constructor(private route: ActivatedRoute,
              private network: NetworkingService) { }

  ngOnInit() {
    this.subscribeUrlParameters();
  }

  subscribeUrlParameters() {
    this.routeUrlSubscription = this.route.params.subscribe(params => {
      this.newsId = +params['id'];
      if (this.newsId) {
        console.log(this.newsId);
        this.getArticle(this.newsId);
      }
    });
  }

  getArticle(id: number) {
    this.network.getRequest(`/articles/${id}`)
      .subscribe(
        (article: ArticleModel) => {
          this.article = article;
        }
      );
  }

}
