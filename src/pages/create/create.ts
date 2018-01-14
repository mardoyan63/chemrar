import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController, ModalController } from 'ionic-angular';
import { Atom } from "./atom-menu/atom-menu";

@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class Create {
  id: number;
  new: boolean = false;
  save:boolean=false;
  showmenu:boolean=false;
  showelements:boolean=false;
  showtransforms:boolean=false;
  showlines:boolean=false;
  pageName:string="Редактор"
  count:number=0;
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public alertCtrl: AlertController) {
    /*this.id = setInterval(() => {
    this.count++;
    
  }, 5000);*/
  
  }
  openAtomModal() {
    let myModal = this.modalCtrl.create(Atom);
    myModal.present();
    
  }
  presentConfirm() {
  const alert = this.alertCtrl.create({
    title: 'Вы действительно хотите удалить файл?',
    message: 'Это действие необходимо',
    mode:'ios',
    buttons: [
      {
        text: 'Отмена',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'OK',
        handler: () => {
          console.log('Buy clicked');
          this.new=false;
        }
      }
    ]
  });
  alert.present();
}
orDlete(){
  if(this.save){
    this.save=false;
  }
  else{
    this.presentConfirm();
  }
}
openElements(){
  this.pageName="Замена атома";
  this.showelements=!this.showelements;
  this.showmenu=!this.showmenu;
  if(!this.showelements){
    this.pageName="Редактор";
  }
}
openTransform(){
  this.pageName="Перемещение";
  this.showtransforms=!this.showtransforms;
  this.showmenu=!this.showmenu;
   if(!this.showtransforms){
    this.pageName="Редактор";
  }
}
openLines(){
  this.pageName="Изменение связей";
  this.showlines=!this.showlines;
  this.showmenu=!this.showmenu;
   if(!this.showlines){
    this.pageName="Редактор";
  }
}
dbclick(){
    this.count++;
    if (this.count<2){
  this.id = setInterval(() => {
    console.log('ok!');
    this.count=0;
    clearInterval(this.id);
  }, 300);
    }
else{
  this.openAtomModal();
}
}
}
