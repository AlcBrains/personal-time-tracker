import { Component, OnInit } from '@angular/core';
import { NewsRss } from './interfaces/news-rss';
import {HttpClient} from '@angular/common/http';
import * as xml2js from 'xml2js';


@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements OnInit {

  rssData: NewsRss;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  GetRssFeedData() {
    // tslint:disable-next-line:ban-types
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text'
    };
    this.http
      .get<any>('https://gadgets.ndtv.com/rss/feeds', requestOptions)
      .subscribe(data => {
        const parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.rssData = result;
        });
      });
  }


}
