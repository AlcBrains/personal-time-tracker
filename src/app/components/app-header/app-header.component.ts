import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  public isMenuCollapsed: boolean;

  constructor() {
    this.isMenuCollapsed = true;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }


}
