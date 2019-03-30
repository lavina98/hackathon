import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  newsUrl: string;
  constructor(private http: HttpClient) { }
  getUrl() {
    if (this.newsUrl !== undefined) {
      return this.newsUrl;
    }
  }

  setUrl(newsUrl) {
    this.newsUrl = newsUrl;
  }

  getSummary(newsUrl) {
    const url = 'http://localhost:3000/news/summary';
    const body = {
      link: newsUrl
    };
    return this.http.post(url, body);
  }
}
