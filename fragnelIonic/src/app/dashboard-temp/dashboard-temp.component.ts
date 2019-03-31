import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../shared/services/dashboard.service';
import {IGoogleNews, IArticle} from '../shared/models/dashboardtemp';
@Component({
  selector: 'app-dashboard-temp',
  templateUrl: './dashboard-temp.component.html',
  styleUrls: ['./dashboard-temp.component.scss'],
})
export class DashboardTempComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }
  articles:IArticle[];
  ngOnInit() {
    this.dashboardService.getNewsFromGoogle().subscribe((data:IGoogleNews)=>{
      console.log(data);
      this.articles = data.articles;
    })
  }

}
