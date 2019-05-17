import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {NetworkingService} from '../../services/networking.service';
import {UserModel} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  @ViewChild('email') email: ElementRef<HTMLInputElement>;
  @ViewChild('password') password: ElementRef<HTMLInputElement>;


  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoginDialogData,
    private network: NetworkingService,
    private user: UserService,
    private router: Router ) {}

  dialogClose(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

  }


  login() {
    if (this.email.nativeElement.value === '' || this.password.nativeElement.value === '') {
      return;
    } else {
      const data = {
        email: this.email.nativeElement.value,
        password: this.password.nativeElement.value
      };
      this.network.postRequest(data, `/login`)
        .subscribe(
          (_data: UserModel) => {
            debugger
            NetworkingService.setCookie('access_token', _data['data'].api_token);
            NetworkingService.setCookie('refresh_token', _data['data'].api_token);
            this.network.getRequest(`/user`, _data['data'].api_token).subscribe(
              (user: UserModel) => {
                this.user.setUser(user);
                this.router.navigate(['/'])
                  .then(
                    () => {
                      console.log('go home');
                      this.dialogClose();
                    });
              }
            );

          });
    }
  }
}

export interface LoginDialogData {
  email: string;
  password: string;
}
