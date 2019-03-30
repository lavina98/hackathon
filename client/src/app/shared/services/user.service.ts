import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(obj) {
    const url = 'http://192.168.43.81:3000/user/login';
    const body = obj;
    return this.http.post(url, body);
  }

  register(obj) {
    const url = 'http://192.168.43.81:3000/user/register';
    const body = obj;
    return this.http.post(url, body);
  }

}
