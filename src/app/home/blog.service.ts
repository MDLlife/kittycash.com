import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

const routes = {
  blog: () => `/blog/index.json`
};

@Injectable()
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  getBlogArticles(): Observable<string> {
    return this.httpClient
      .get(routes.blog())
      .pipe(
        map((body: any) => body.items),
        catchError(() => of('Error, could not load blog :-('))
      );
  }

}
