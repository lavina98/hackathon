import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../shared/services/dashboard.service';
import { INews } from '../shared/models/news';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topNewsIndex = 0;
  businessIndex = 0;
  entertainmentIndex = 0;
  generalIndex = 0;
  healthIndex = 0;
  scienceIndex = 0;
  sportsIndex = 0;
  technologyIndex = 0;
  politicsIndex = 0;

  isTopNews = false;
  isBusiness = false;
  isEntertainment = false;
  isGeneral = false;
  isHealth = false;
  isScience = false;
  isSports = false;
  isTechnology = false;
  isPolitics = false;


  constructor(private dashboardService: DashboardService) { }
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
      const size = Object(data).length;
      for (let i = 0; i < size - 1; i++) {
        this.topHeadlines.push(data[i]);
      }
      this.isTopNews = true;
    });
    this.dashboardService.getNews('business').subscribe((data: INews) => {
      console.log(data);
      const size = Object(data).length;
      for (let i = 0; i < size; i++) {
        this.business.push(data[i]);
      }
      this.isBusiness = true;
    });
    this.dashboardService.getNews('entertainment').subscribe((data: INews) => {
      console.log(data);
      const size = Object(data).length;
      for (let i = 0; i < size; i++) {
        this.entertainment.push(data[i]);
      }
      this.isEntertainment = true;
    });
    this.dashboardService.getNews('general').subscribe((data: INews) => {
      console.log(data);
      const size = Object(data).length;

      for (let i = 0; i < size; i++) {
        this.general.push(data[i]);
      }
      this.isGeneral = true;
    });
    this.dashboardService.getNews('health').subscribe((data: INews) => {
      console.log(data);
      const size = Object(data).length;

      for (let i = 0; i < size; i++) {
        this.health.push(data[i]);
      }
      this.isHealth = true;

    });
    this.dashboardService.getNews('science').subscribe((data: INews) => {
      console.log(data);
      const size = Object(data).length;

      for (let i = 0; i < size; i++) {
        this.science.push(data[i]);
      }
      this.isScience = true;
    });
    this.dashboardService.getNews('sports').subscribe((data: INews) => {
      console.log(data);
      const size = Object(data).length;

      for (let i = 0; i < size; i++) {
        this.sports.push(data[i]);
      }
      this.isSports = true;
    });
    this.dashboardService.getNews('technology').subscribe((data: INews) => {
      console.log(data);
      const size = Object(data).length;

      for (let i = 0; i < size; i++) {
        this.technology.push(data[i]);
      }
      this.isTechnology = true;
    });
    this.dashboardService.getNews('politics').subscribe((data: INews) => {
      console.log(data);
      const size = Object(data).length;

      for (let i = 0; i < size; i++) {
        this.politics.push(data[i]);
      }
      this.isPolitics = true;
    });



  }

  incrementTopNews() {
    this.topNewsIndex++;
  }
  incrementBusiness() {
    this.businessIndex++;
  }
  incrementEntertainment() {
    this.entertainmentIndex++;
  }
  incrementGeneral() {
    this.generalIndex++;
  }
  incrementHealth() {
    this.healthIndex++;
  }
  incrementScience() {
    this.scienceIndex++;
  }
  incrementSports() {
    this.sportsIndex++;
  }
  incrementTechnology() {
    this.technologyIndex++;
  }
  incrementPolitics() {
    this.politicsIndex++;
  }
}



