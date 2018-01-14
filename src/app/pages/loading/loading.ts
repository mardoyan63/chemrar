import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'load-page',
    templateUrl:'loading.html'
})
export class Loading{
    constructor(public navCtrl:NavController){
        
    }
}