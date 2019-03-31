import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor(private http: HttpClient) { }

  getAnswer(userQuery: string) {
    const url = 'http://localhost:3000/chatbot/answer';
    return this.http.post(url, { text: userQuery });
  }
}
