import {Injectable} from "@angular/core";

@Injectable()
export class MyService {
    private myValue:any = {};

    constructor() {}

    setValue(key:any,val:any) {
        this.myValue[key] = val;
    }

    getValue(key:any) {
        return this.myValue[key];
    }
}