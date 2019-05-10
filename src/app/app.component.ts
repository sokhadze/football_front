import {Component, OnInit} from '@angular/core';
import {NetworkingService} from './services/networking.service';
import {UserService} from './services/user.service';
import {UserModel} from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogged = false;

  constructor(private network: NetworkingService,
              private userService: UserService) {
    this.isLogged = Boolean(NetworkingService.getCookie('access_token'));
  }

  ngOnInit() {
    if (NetworkingService.getCookie('access_token')) {
      this.network.getRequest(`/user`)
        .subscribe(
          (user: UserModel) => {
            this.userService.setUser(user);
          }
        );
    } else {
      this.network.getRequest('/articles')
        .subscribe(
          (articles: any) => {
            console.log(articles);
          }
        );
      this.userService.getUser
        .subscribe(
          (user: UserModel) => {
            if (user) {
              this.isLogged = true;
            }
          }
        );
    }

  }
}
