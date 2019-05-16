import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {LoginDialogComponent} from '../../modal/login-dialog/login-dialog.component';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string;
  animal: string;

  constructor(public dialog: MatDialog,
              public userService: UserService) { }

  ngOnInit() {
    this.userService.getUser
      .subscribe(
        (data: any) => {
          console.log(data);
        }
      );
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
}

