import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WebStorage {

  constructor(
    private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService
  ) {}

  get(key:any) {
    var sessionData = this.localStorageService.retrieve(key);
    var localData = this.sessionStorageService.retrieve(key);   
    return sessionData || localData;
  }
}