import { Injectable } from '@angular/core';
import { LocalStorage } from "./localstorage.service";


@Injectable()
export class Service {
    B:boolean;
    start:boolean;
    constructor(public ls:LocalStorage){
        /*this.ls.delIt("pnum");
        this.ls.delIt("code");
        this.ls.delIt("key");
        this.ls.delIt("gev");
        this.ls.delIt("start")*/
        this.B=this.ls.getIt("code") || false;
        this.start=this.ls.getIt("start") || false;
    }
    
    reg(){
        this.B = this.ls.getIt("code") || false;
    }
    str(){
        this.start=this.ls.getIt("start") || false;
    }
    quit(){
        this.B=false;
        this.start=false;
    }
}