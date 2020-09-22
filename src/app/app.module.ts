import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { HeaderComponent } from './components/app-header/app-header.component';
import { FooterComponent } from './components/app-footer/app-footer.component';
import { AppBlogComponent } from './components/app-blog/app-blog.component';
import { AppCalendarComponent } from './components/app-calendar/app-calendar.component';
import { AppMainComponent } from './components/app-main/app-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AppBlogComponent,
    AppCalendarComponent,
    AppMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
