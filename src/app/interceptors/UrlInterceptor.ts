import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpBackend
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  constructor(private back: HttpBackend) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.indexOf('/index.html') > -1) {
      return this.back.handle(req);
    }
    const novaUrlReq = req.clone({
      url: `${environment.hostApi}/${req.url}`,
      setHeaders: { 'Access-Control-Allow-Origin': '*' }
    });
    console.log(novaUrlReq);
    // novaUrlReq.headers.append('Accept', 'application/json');
    // novaUrlReq.headers.append('X-Requested-With', 'XMLHttpRequest');
    console.log(novaUrlReq);
    return next.handle(novaUrlReq);
  }
}
