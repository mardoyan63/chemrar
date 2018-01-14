import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { Camera } from '@ionic-native/camera';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalStorage } from "./serv/localstorage.service";
import { Phone } from "./pages/phone/phone.component";
import { Code } from "./pages/code/code.component";
import { FormatPipe } from "./pipes/number-pipe";
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import {Mask} from './mask';

import { One } from "./pages/startpage1/startpage1component";

import { Service } from "./serv/service";
import { Loading } from "./pages/loading/loading";

import { Files } from "../pages/files/files";
import { Scan } from "../pages/scan/scan";
import { Create } from "../pages/create/create";
import { Info } from "../pages/info/info";
import { Instruct } from "../pages/info/Instruction/ins";
import { mainInfo } from "../pages/info/maininfo/maininfo";
import { Policy } from "../pages/info/policy/policy";
import { Atom } from "../pages/create/atom-menu/atom-menu";
import { FormatMenu } from "../pages/files/format-menu/formatmenu";


@NgModule({
  declarations: [
    MyApp,
    Scan,
    Info,
    TabsPage,
    Phone,
    Code,
    FormatPipe,
    Mask,
    One,
    Loading,
    Files,
    Create,
    Instruct,
    mainInfo,
    Policy,
    Atom,
    FormatMenu
  ],
  imports: [
    FormsModule,
    TextMaskModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicPageModule.forChild(Files),
    IonicPageModule.forChild(Scan),
    IonicPageModule.forChild(Atom),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Scan,
    Info,
    TabsPage,
    Phone,
    Code,
    One,
    Loading,
    Files,
    Create,
    Instruct,
    mainInfo,
    Policy,
    Atom,
    FormatMenu
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalStorage,
    Service,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
