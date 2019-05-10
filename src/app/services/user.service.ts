import { Injectable } from '@angular/core';
import {UserModel} from '../models/user.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = new BehaviorSubject<UserModel>(null);
  getUser = this.user.asObservable();

  constructor() {
  }

  setUser(user: UserModel) {
    this.user.next(user);
  }}
