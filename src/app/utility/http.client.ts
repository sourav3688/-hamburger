import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { WebStorage } from './web.storage';
import { AppConfig } from './../config/app.config';

@Injectable()
export class HttpClient {

  constructor(
    private http: Http,
    private config: AppConfig,
    private storage: WebStorage
  ) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Authorization', 'bearer ' + this.storage.get('superadminAuthToken'));
  } 

  get(url:any, data:any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let options = {
      headers: headers
    };
    let params: URLSearchParams = new URLSearchParams();
    Object.keys(data).map(function(key, index) { 
      if(data[key] != ''){
        params.set(key, data[key]);
      }         
    });      
    options['search'] = params;
    return this.http.get(this.config.apiUrl+url, options); 
  }

  post(url:any, data:any) { 
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(this.config.apiUrl+url, data, {
      headers: headers
    });
  }

  extractData(res: any) {
    let body = res.json();
    return body.data || { };
  }

  handleError (error: any) {
    let errMsg: string= error.message ? error.message : error.toString();
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}