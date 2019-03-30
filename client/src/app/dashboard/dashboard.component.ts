import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../shared/services/dashboard.service';
import { INews } from '../shared/models/news';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {}
  topHeadlines: INews[] = [];
  business: INews[] = [];
  entertainment: INews[] = [];
  general: INews[] = [];
  health: INews[] = [];
  science: INews[] = [];
  sports: INews[] = [];
  technology: INews[] = [];
  politics: INews[] = [];
  categories: string[] = ['topHeadlines', 'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology', 'politics'];
  ngOnInit() {
    this.dashboardService.getNews('topHeadlines').subscribe((data: INews) => {
      console.log(data);
      for (let i = 0; i < 3; i++) {
        this.topHeadlines.push(data[i]);
      }
    });
    this.dashboardService.getNews('business').subscribe((data: INews) => {
      console.log(data);
      for (let i = 0; i < 3; i++) {
        this.business.push(data[i]);
      }
    });
    this.dashboardService.getNews('entertainment').subscribe((data: INews)=>{
      console.log(data);
      for (let i = 0; i < 3; i++) {
        this.entertainment.push(data[i]);
      }
    });
    this.dashboardService.getNews('general').subscribe((data: INews)=>{
      console.log(data);
      for (let i = 0; i < 3; i++) {
        this.general.push(data[i]);
      }
    });
    this.dashboardService.getNews('health').subscribe((data: INews)=>{
      console.log(data);
      for (let i = 0; i < 3; i++) {
        this.health.push(data[i]);
      }
    });
    this.dashboardService.getNews('science').subscribe((data: INews)=>{
      console.log(data);
      for (let i = 0; i < 3; i++) {
        this.science.push(data[i]);
      }
    });
    this.dashboardService.getNews('sports').subscribe((data: INews)=>{
      console.log(data);
      for (let i = 0; i < 3; i++) {
        this.sports.push(data[i]);
      }
    });
    this.dashboardService.getNews('technology').subscribe((data: INews)=>{
      console.log(data);
      for (let i = 0; i < 3; i++) {
        this.technology.push(data[i]);
      }
    });
    this.dashboardService.getNews('politics').subscribe((data: INews)=>{
      console.log(data);
      for (let i = 0; i < 3; i++) {
        this.politics.push(data[i]);
      }
    });

  }
}
