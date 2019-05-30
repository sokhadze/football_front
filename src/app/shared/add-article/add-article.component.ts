import { Component, OnInit } from '@angular/core';
import {NetworkingService} from '../../services/networking.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  data = {
    'name': '',
    'email': '',
    'password': '',
    'password_confirmation': ''};
  constructor(private network: NetworkingService) { }

  ngOnInit() {
  }

  addArticle() {
    // this.data.name = this.name;
    // this.data.email = this.email;
    // this.data.password = this.password;
    // this.data.password_confirmation = this.password_confirmation;
    this.network.postRequest(this.data, `/register`)
      .subscribe(
        (res: any) => {
          console.log(res);
        }
      );
  }
}
