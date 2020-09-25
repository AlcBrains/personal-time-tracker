import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
  public API = '//localhost:8080';
  public POST_API = this.API + '/posts';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.POST_API);
  }

  get(id: string) {
    return this.http.get(this.POST_API + '/' + id);
  }

  save(post: any): Observable<any> {
    return this.http.post(this.POST_API + '/post', post);
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
