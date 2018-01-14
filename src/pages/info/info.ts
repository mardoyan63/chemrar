import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { mainInfo } from "./maininfo/maininfo";


@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
  providers:[SocialSharing]
})
export class Info {

  @ViewChild("nav") nav:NavController
  constructor(public navCtrl: NavController, private socialSharing: SocialSharing) {
  }
  ionViewWillEnter(){
    console.log("jeloo")
    this.nav.setRoot(mainInfo);
  }
  openMenu(){
    this.socialSharing.share('Body', 'Subject', ['recipient@example.org']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }
    
}
