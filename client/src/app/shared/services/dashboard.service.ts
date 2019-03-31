import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class DashboardService {
    constructor(private http: HttpClient) {

    }

    getNews(category: string) {
        return this.http.get('http://192.168.43.252:3000/news/' + category);
    }

}

