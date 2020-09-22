import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './components/app-main/app-main.component';
import { AppCalendarComponent } from './components/app-calendar/app-calendar.component';
import { AppBlogComponent } from './components/app-blog/app-blog.component';




const appRoutes: Routes = [
  {
      path: 'home',
      component: AppMainComponent
    },
    {
      path: 'activities',
      component: AppCalendarComponent
    },
    {
      path: 'blog',
      component: AppBlogComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
