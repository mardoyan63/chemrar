import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { Phone } from "./pages/phone/phone.component";
import { One } from "./pages/startpage1/startpage1component";
import { Service } from "./serv/service";
import { Loading } from "./pages/loading/loading";
import { Code } from "./pages/code/code.component";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Loading;
  app:boolean=false;
  constructor( 
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public service:Service
  ) {
    platform.ready().then(() => {
      //this.ls.setIt("key", "1234");
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    
      if(this.service.start){
        if(this.service.B){
          this.rootPage=TabsPage;
        }
        else{this.rootPage=Phone;}
      }
      else{
        this.rootPage=One;
      }
    });
  }
}
