import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  useremail: string;
  constructor(private http: HttpClient) { }

  login(obj) {
    const url = 'http://192.168.43.252:3000/user/login';
    const body = obj;
    return this.http.post(url, body);
  }

  register(obj) {
    const url = 'http://192.168.43.252:3000/user/register';
    const body = obj;
    return this.http.post(url, body);
  }

  setUserEmail(email: string) {
    console.log('Setting user email in user service');
    this.useremail = email;
  }

  getUserEmail() {
    console.log('getting user email from service');
    return this.useremail;
  }

  getUserDetails(email: string) {
    this.http.post('http://192.168.43.252:3000/user', {email});
  }

}
