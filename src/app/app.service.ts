import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  islogedIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    // if(localStorage.getItem('islogedIn') && JSON.parse(localStorage.getItem('islogedIn')))
    //   this.islogedIn.next(true)
    // else
    //   this.islogedIn.next(false)
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/${environment.jwtLogin}`, { username, password })
        .pipe(
            map(response => {
              // login successful if there's a jwt token in the response
              let currentUser: User;
              if (response.access) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                currentUser = jwtDecode(response.access)
                currentUser.token = response.access
                currentUser.refreshToken = response.refresh
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                this.currentUserSubject.next(currentUser);

              }
              return currentUser;
            }),
        )
    // .subscribe( data => console.log('data'), error => console.log('error'))
  }

  refreshToken() {
    console.log('this.currentUserValue.refreshToken')
    console.log(this.currentUserValue.refreshToken)
    const refreshToken = this.currentUserValue.refreshToken
    return this.http.post<any>(`${environment.apiUrl}/${environment.jwtRefresh}`, { 'refresh': refreshToken })
        .pipe(
            map(response => {
              // login successful if there's a jwt token in the response
              console.log('refresh')
              console.log(response)
              let currentUser: User;
              if (response.access) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                currentUser = jwtDecode(response.access)
                currentUser.token = response.access
                currentUser.refreshToken = response.refresh
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                console.log(currentUser)
                this.currentUserSubject.next(currentUser);
              }
              return currentUser;
            }),
        )
    // .subscribe( data => console.log('data'), error => console.warn(error))
  }
  register(body){
    return this.http.post(" http://127.0.0.1:8000/signup/",body)
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
export class User {
  id: number;
  username: string;
  password?: string;
  firstName: string;
  lastName: string;
  token?: string;
  refreshToken?: string;
}
