import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { NavController, ItemSliding, ToastController, Platform, ActionSheetController, AlertController, App } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { Create } from "../create/create";
import { Tabs } from "ionic-angular/navigation/nav-interfaces";

const cameraPreviewOpts: CameraPreviewOptions = {
  x: 0,
  y: 0,
  width: window.screen.width,
  height:  window.screen.height,
  camera: 'rear',
  tapPhoto: true,
  previewDrag: true,
  toBack: true,
  alpha: 1
};
const pictureOpts: CameraPreviewPictureOptions = {
  width: window.screen.width,
  height: window.screen.height,
  quality: 85
}
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
  providers:[CameraPreview]
})
export class Scan{
  tab:Tabs;
  picture:string='';
  show:boolean=false;
  @ViewChild("nav") nav:NavController
  constructor(
    public promptCtrl: AlertController,  
    public navCtrl: NavController, 
    public alertCtrl: ActionSheetController, 
    public platform: Platform,
    private cameraPreview: CameraPreview,
    public app:App,
  ) {
    this.tab = navCtrl.parent;
  }
ionViewDidEnter(){
  this.start();
  
}
ionViewWillLeave(){
  this.cameraPreview.stopCamera();
}
  start(){
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
  (res) => {
    console.log(res)
  },
  (err) => {
    console.log(err)
  });
  }
takePicture(){
  this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
  this.picture = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
  console.log(err);
  this.picture = 'assets/img/test.jpg';
});
  this.present();
}
   Prompt() {
    let prompt = this.promptCtrl.create({
      title: 'Сканирование',
      mode:'ios',
      message: "Добавьте название файла",
      inputs: [
        {
          name: 'title',
          placeholder: 'Название'
        },
      ],
      buttons: [
        {
          text: 'Отмена',
          handler: data => {
            console.log('Cancel clicked');
            this.picture='';
          }
        },
        {
          text: 'Сохранить',
          handler: data => {
            console.log('Saved clicked');
            this.picture='';
          }
        },
        
      ]
    });
    prompt.present();
  }
  present() {
    let actionSheet = this.alertCtrl.create({
      title: 'Что сделать с этим сканированием?',
      buttons: [
        {
          text: 'Сохранить в <<Файлы>>',
          icon: 'annaniks-файлы',
          handler: () => {
            this.Prompt();
            this.picture='';
          }
        },
        {
          text: 'Открыть в редакторе',
          icon: 'annaniks-редактор',
          handler: () => {
            console.log('Share clicked');
            this.picture='';
            this.tab.select(2,{},false);
            //console.log(this.app.getRootNavs())//.setRoot(Create)
           // this.navCtrl.setRoot(Create)
          }
        },
        {
          text: 'Отмена',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.picture='';
          }
        },
      ]
    });

    actionSheet.present();
  }
  open(){
    this.present();
    this.show=!this.show;
  }
}
