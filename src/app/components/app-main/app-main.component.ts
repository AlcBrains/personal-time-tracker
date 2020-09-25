import {Component, OnInit} from '@angular/core';
import {NewsRss} from './interfaces/news-rss';
import {HttpClient} from '@angular/common/http';
import * as xml2js from 'xml2js';
import {take} from 'rxjs/operators';


@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements OnInit {

  rssData: any;

  constructor(private http: HttpClient) {
    this.rssData = [];
  }

  ngOnInit(): void {
    this.GetRssFeedData();
  }

  GetRssFeedData() {
    // tslint:disable-next-line:ban-types
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text'
    };
    this.http
      .get<any>('https://gadgets.ndtv.com/rss/feeds', requestOptions).pipe(take(1))
      .subscribe(data => {
        const parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.rssData = result.rss.channel[0].item.filter((n, i) => i < 5);
          console.log(this.rssData)
        });
      });
  }


}
