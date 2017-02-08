import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from './../../../utility/http.client';


@Injectable()
export class ProductService {

    constructor(
        private http: HttpClient
    ) {}

    getProducts(): Observable<any> {
        return this.http.get('/productlist', {});
    }

}