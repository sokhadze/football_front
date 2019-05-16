import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {UserService} from './user.service';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetworkingService {
  url = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private currentUser: UserService) { }

  static getCookie(cName) {
    if (localStorage.getItem(cName)) {
      return decodeURI(localStorage.getItem(cName));
    }
    return null;
  }

  static setCookie(cName, value) {
    localStorage.setItem(cName, value);
  }

  getUrl(): Observable<any> {
    const jsonFile = 'assets/url.config.json';
    return this.http.get(jsonFile)
      .pipe(map(
        ((response: Response) => {
          this.url = response.url;
        })
      ));
  }

  getRequest(url: string, api_token?: any): Observable<any> {
    const header = new HttpHeaders().set('Content-Type', 'application/json')
    // const header = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest')

      .set('Authorization', 'Bearer ' + api_token);
    return this.http.get(`${this.url}${url}`, {headers: header})
      .pipe(map(
        (response: Response) => {
          return response;
        }), catchError(
        (error: Response) => {
          return throwError(error);
        }));
  }

  postRequest(data: any, url: string): Observable<any> {
    const header = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + NetworkingService.getCookie('access_token'));
    return this.http.post(`${this.url}${url}`, data, {headers: header, withCredentials: true})
      .pipe(map(
        (response: Response) => {
          return response;
        }), catchError(
        (error: Response) => {
          return throwError(error);
        }));
  }

  putRequest(data: any, url: string): Observable<any> {
    const header = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + NetworkingService.getCookie('access_token'));
    return this.http.put(`${this.url}${url}`, data, {headers: header})
      .pipe(map(
        (response: Response) => {
          return response;
        }),
        catchError(
          (error: Response) => {
            return throwError(error);
          }));
  }

  deleteRequest(url: string): Observable<any> {
    const header = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + NetworkingService.getCookie('access_token'));
    return this.http.delete(`${this.url}${url}`, {headers: header})
      .pipe(map(
        (response: Response) => {
          return response;
        }), catchError(
        (error: Response) => {
          return throwError(error);
        }));
  }

}
