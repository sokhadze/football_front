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

  @Input() name: string;
  @Input() email: string;
  @Input() password: string;
  @Input() password_confirmation: string;

  data = {
    'name': this.name,
    'email': this.email,
    'password': this.password,
    'password_confirmation': this.password_confirmation};
  constructor(private network: NetworkingService) { }

  ngOnInit() {
  }

  registration() {
    console.log(this.data);
    // this.network.postRequest('', `/register`)
    //   .subscribe(
    //     (res: any) => {
    //       console.log(res);
    //     }
    //   );
  }
}
