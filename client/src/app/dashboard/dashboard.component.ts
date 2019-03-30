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
  ngOnInit() {
    this.dashboardService.getTopHeadlines().subscribe((data: INews) => {
      console.log(data);
      for (let i = 0; i < 3; i++) {
        this.topHeadlines.push(data[i]);
      }
    });
  }

  moreInfo() {
    console.log('in more info');
  }
}
