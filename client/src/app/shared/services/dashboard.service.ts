import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class DashboardService {
    constructor(private http: HttpClient) {

    }

    getNews(category: string) {
        return this.http.get('http://192.168.43.252:3000/news/' + category);
    }

    voteup(url: string, upvotes: number) {
        const obj = {
            url,
            upvotes,
            user: 'lg'
        };
        return this.http.post('http://192.168.43.252:3000/news1/upvote', obj);
    }

    votedown(url: string, downvotes: number) {
        const obj = {
            url,
            downvotes,
            user: 'lg'
        };
        return this.http.post('http://192.168.43.252:3000/news1/downvote', obj);
    }

    markSpam(url: string, spam: number) {
        const obj = {
            url,
            spam,
            user: 'lg'
        };
        return this.http.post('http://192.168.43.252:3000/news1/upvote', obj);
    }

}

