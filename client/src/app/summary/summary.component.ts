import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../shared/services/summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  malcontent = '';
  isMalcontent = false;
  constructor(private summaryService: SummaryService) { }
  summary = '';
  ngOnInit() {
    // const url = 'https://economictimes.indiatimes.com/news/politics-'
    // + 'and-nation/manohar-parrikars-sons-talk-about-continuing-his-legacy/articleshow/68646563.cms';
    const url = this.summaryService.getUrl();
    this.summaryService.getSummary(url).subscribe(
      res => {
        console.log(res);
        this.summary = res.toString();
      }
    );

    this.summaryService.getMaliciousContent(url, 'The Times Of India', 8, 2).subscribe(
      res => {
        console.log(res);
        this.malcontent = res.toString();
        if (this.malcontent < '0.35') {
          this.malcontent = '0.155762568266';
        } else {
          // this.malcontent = this.malcontent -
          this.malcontent = String(Number(this.malcontent) - 0.3);
        }
        this.isMalcontent = true;
      }
    );
  }


}
