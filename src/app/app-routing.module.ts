import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppMainComponent} from './components/app-main/app-main.component';
import {AppBlogComponent} from './components/app-blog/app-blog.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'blog', pathMatch: 'full'},
  {
    path: 'blog',
    component: AppBlogComponent
  },
  {
    path: 'about',
    component: AppMainComponent
  }
  // {
  //   path: 'activities',
  //   component: AppCalendarComponent
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
