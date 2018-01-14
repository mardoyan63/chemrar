import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { LocalStorage } from "../../serv/localstorage.service";
import { Service } from "../../serv/service";
import { TabsPage } from "../../../pages/tabs/tabs";
import { Phone } from "../phone/phone.component";
@Component({
    selector: 'page-s1',
    templateUrl:'startpage1component.html'
})
export class One{
    buttonLabel:string="Далее"
    constructor(public service:Service, public navCtrl:NavController, public ls:LocalStorage){
    }
    @ViewChild(Slides) slides: Slides;
   
nextSlide(){
    if(this.slides._activeIndex==1){
        this.buttonLabel='Начать';
    }
    else{
        this.buttonLabel='Далее';
    }
   if(this.slides._activeIndex<2){
       this.slides.slideNext(500);
   } else{
       this.start();
   }
}
change(){
    if(this.slides._activeIndex<2){
        this.buttonLabel='Далее';
    }
    else{
        this.buttonLabel='Начать';
    }
}

start(){
        this.ls.setIt("start", "true");
        this.service.str();
        this.navCtrl.setRoot(Phone);
    }
}