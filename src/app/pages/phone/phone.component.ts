import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Code } from "../code/code.component";
import { LocalStorage } from "../../serv/localstorage.service";
import { Service } from "../../serv/service";
import { One } from "../startpage1/startpage1component";

@Component({
  selector: 'page-phone',
  templateUrl: 'phone.component.html'
})
export class Phone{
  isTrue:boolean = true;
    public mask = ["+", /[7]/, '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/,/\d/,/\d/,' ', /\d/, /\d/,' ', /\d/, /\d/,];
  num:String='';
  constructor(public navCtrl: NavController, private ls:LocalStorage, public service:Service) {
   
  }
  ngOnInit(){
     if(this.service.B){
      this.navCtrl.setRoot(One);
    }
  }
  next(){
    console.log(this.num.length);
    
      if(this.num.length==17){
    this.ls.setIt("pnum", this.num);
    this.navCtrl.push(Code);
    console.log(this.num.length);
    
    }
  }
  setValue(value){
        
        this.num = value.length > 11 ? value.substring(0,11) : value;
    }
    change(value,code){
       this.setValue(value.toString());
    }
}
