import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {LoginDialogComponent} from '../../modal/login-dialog/login-dialog.component';
import {UserService} from '../../services/user.service';
import {NetworkingService} from '../../services/networking.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean;
  name: string;
  animal: string;
  user: any = UserModel;
  userDataAvailable: boolean;

  constructor(public dialog: MatDialog,
              public userService: UserService,
              private networking: NetworkingService) {
  }

  ngOnInit() {
    // this.userService.getUser
    //   .subscribe(
    //     (data: any) => {
    //       console.log(data);
    //     }
    //   );
    this.networking.getRequest(`/user`)
      .subscribe(
        (_user: UserModel) => {
          this.userService.setUser(_user);
          this.isLogged = true;
          this.user = _user;
          this.userDataAvailable = true;
        }, () => {
          this.userDataAvailable = true;
        }
      );
    this.checkUser();
  }

  checkUser() {
    this.userService.getUser
      .subscribe(
        (user: UserModel) => {
          if (user) {
            this.isLogged = true;
            this.user = user;
            this.userDataAvailable = true;
          }
        });
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '300px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

  logout() {
    localStorage.clear();
    location.reload(true);
  }
}

