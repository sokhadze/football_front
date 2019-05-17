import {Component, OnInit, ViewChild} from '@angular/core';
import {NetworkingService} from '../services/networking.service';
import {MatPaginator} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles = [];
  resultsLength = 20;
  pageSize = 10;
  page = 1;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private network: NetworkingService) { }

  ngOnInit() {
    this.getArticles(1);

    this.subscribePaginationObservable();
  }

  subscribePaginationObservable() {
    this.paginator.page.subscribe(
      (data: any) => {
        console.log(data);
        const page = data.pageIndex + 1;
        this.getArticles(page);
      }
    );
  }

  getArticles(page?: number) {
    this.network.getRequest(`/articles?page=${page}`)
      .subscribe(
        (data: []) => {
          console.log(data);
          this.resultsLength = data['total'];
          this.pageSize = data['per_page'];
          this.articles = data['data'];
          // data['data'].forEach(
          //   (item: any) => {
          //     this.articles = item;
          //   }
          // );
        }
      );
  }

}
