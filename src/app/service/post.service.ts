import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CarService {
  public API = '//localhost:8080';
  public POST_API = this.API + '/posts';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API);
  }

  get(id: string) {
    return this.http.get(this.POST_API + '/' + id);
  }

  save(post: any): Observable<any> {
    let result: Observable<any>;
    if (post.href) {
      result = this.http.put(post.href, post);
    } else {
      result = this.http.post(this.POST_API, post);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
