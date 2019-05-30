import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NetworkingService} from '../../services/networking.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @ViewChild('name') name: ElementRef<HTMLInputElement>;
  // @ViewChild('email') email: ElementRef<HTMLInputElement>;
  // @ViewChild('password') password: ElementRef<HTMLInputElement>;
  // @ViewChild('password_confirmation') password_confirmation: ElementRef<HTMLInputElement>;

  // @Input() name: string;
  // @Input() email: string;
  // @Input() password: string;
  // @Input() password_confirmation: string;

  data = {
    'name': '',
    'email': '',
    'password': '',
    'password_confirmation': ''};
  constructor(private network: NetworkingService) { }

  ngOnInit() {

  }

  registration() {
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
