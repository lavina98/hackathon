import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class DashboardService {
    constructor(private http: HttpClient) {

    }

    getNews(category: string) {
        return this.http.get('http://192.168.43.252:3000/news/' + category);
    }

    getNewsFromGoogle() {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=142d4ee37d7d4fc7b0ef19b049bc03e1');
    }
}

