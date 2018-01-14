import { Component } from '@angular/core';
import { NavController, Platform, App } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Instruct } from "../Instruction/ins";
import { Policy } from "../policy/policy";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LocalStorage } from "../../../app/serv/localstorage.service";
import { Code } from "../../../app/pages/code/code.component";
import { MyApp } from "../../../app/app.component";
import { Phone } from "../../../app/pages/phone/phone.component";
import { Service } from "../../../app/serv/service";
Service
@Component({
  selector: 'page-maininfo',
  templateUrl: 'maininfo.html',
  providers:[SocialSharing, InAppBrowser]
})
export class mainInfo {

  constructor(
    private iab: InAppBrowser,
     public navCtrl: NavController,
      private socialSharing: SocialSharing,
      public ls:LocalStorage,
      public appCtrl:App,
      public service:Service,
    ) {
    this.navCtrl.popAll;
}
  openMenu(){
    this.socialSharing.share('Body', 'Subject', ['recipient@example.org']).then(() => {
  // Success!
}).catch(() => {
  // Error!
});
  }
  ins(){
    this.navCtrl.push(Instruct);
  }
  pol(){
    this.navCtrl.push(Policy);
  }
  developerSite(){
    const browser = this.iab.create('http://chemdiv.com');
    browser.show();
  }
  rateApp(){
     const browser = this.iab.create('http://chemdiv.com');
    browser.show();
  }
  quitApp(){
    this.ls.delIt('code');
    this.ls.delIt('pnum');
    this.ls.delIt('start');
    this.service.quit();
    this.appCtrl.getRootNav().setRoot(Phone);
  //  window.location.reload()
  }
}