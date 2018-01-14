import { Component,NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalStorage } from "../../serv/localstorage.service";
import { Service } from "../../serv/service";
import { One } from "../startpage1/startpage1component";
import { TabsPage } from "../../../pages/tabs/tabs";

@Component({
    selector: 'page-code',
    templateUrl: 'code.component.html',
    
})
export class Code{
     public mask = [/\d/,' ', /\d/,' ',/\d/,' ',/\d/,];
    private code;
     constructor(
         public service:Service, 
         public navCtrl: NavController, 
         public ls:LocalStorage,
        private _ngZone:NgZone) {

            this.change = this.change.bind(this);
        }
    ngOnInit(){
     if(this.service.B){
      this.navCtrl.setRoot(One)
    }
  }
     
     back(){
         this.navCtrl.pop(this.navCtrl);
     }
    next(){
            if(this.code.length==7){
                this.ls.setIt("code", this.code);
                this.service.reg();
                this.navCtrl.setRoot(TabsPage);
            }
    }
         //(keyup)="change($event.target.value)"
    setValue(value){
        
        this.code = value.length > 4 ? value.substring(0,4) : value;
    }
    change(value){
       this.setValue(value.toString());
    }
}