import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
    apiUrl:any = "http://localhost:3000/api";
    perPageDefault:any = 5;
    perPageArray:any = [5,10,20,30,40,50];
    MOMENT_DATE_TIME_FORMAT:any = 'YYYY-MM-DD HH:mm:ss';    
    pattern:any = {
        'NAME':/^[a-zA-Z . \-\']*$/,
        "CITY":/^[a-zA-Z . \-\']*$/,               
        "EMAIL":/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "POSTAL_CODE":/(^\d{5}$)|(^\d{5}-\d{4}$)/,
        "PASSWORD":/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,15}$/
    };
}

