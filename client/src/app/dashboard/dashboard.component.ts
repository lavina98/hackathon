import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../shared/services/dashboard.service';
import { INews } from '../shared/models/news';
import { SummaryService } from '../shared/services/summary.service';
import { Router } from '@angular/router';

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


  constructor(private dashboardService: DashboardService, private summaryService: SummaryService, private router: Router) { }

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

  chatWithBot(){
    this.router.navigate(['/chatbot']);
  }

  incrementTopNews() {
    this.topNewsIndex++;
  }

  decrementTopNews() {
    if (this.topNewsIndex > 0) {
      this.topNewsIndex--;
    }
  }

  incrementBusiness() {
    this.businessIndex++;
  }

  decrementBusiness() {
    if (this.businessIndex > 0) {
      this.businessIndex++;
    }
  }

  incrementEntertainment() {
    this.entertainmentIndex++;
  }

  decrementEntertainment() {
    if (this.entertainmentIndex > 0) {
      this.entertainmentIndex--;
    }
  }

  incrementGeneral() {
    this.generalIndex++;
  }

  decrementGeneral() {
    if (this.generalIndex > 0) {
      this.generalIndex--;
    }
  }

  incrementHealth() {
    this.healthIndex++;
  }

  decrementHealth() {
    if (this.healthIndex > 0) {
      this.healthIndex--;
    }
  }

  incrementScience() {
    this.scienceIndex++;
  }

  decrementScience() {
    if (this.scienceIndex > 0) {
      this.scienceIndex--;

    }
  }

  incrementSports() {
    this.sportsIndex++;
  }

  decrementSports() {
    if (this.sportsIndex > 0) {
      this.sportsIndex--;
    }
  }

  incrementTechnology() {
    this.technologyIndex++;
  }

  decrementTechnology() {
    if (this.technologyIndex > 0) {
      this.technologyIndex--;

    }
  }
  incrementPolitics() {
    this.politicsIndex++;
  }

  decrementPolitics() {
    if (this.politicsIndex > 0) {
      this.politicsIndex--;

    }
  }

  getSummary(link) {
    this.summaryService.setUrl(link);
    this.router.navigate(['/summary']);
  }

  upvote(index: number, arr: INews[]) {
    arr[index].upvotes++;
    this.dashboardService.voteup(arr[index].url, arr[index].upvotes).subscribe((data) => {
      console.log(data);
    });
  }

  downvote(index: number, arr: INews[]) {
    arr[index].downvotes++;
    this.dashboardService.votedown(arr[index].url, arr[index].downvotes).subscribe((data) => {
      console.log(data);
    });
  }

  spam(index: number, arr: INews[]) {
    arr[index].spam++;
    this.dashboardService.markSpam(arr[index].url, arr[index].spam).subscribe((data) => {
      console.log(data);
    });
  }
}



