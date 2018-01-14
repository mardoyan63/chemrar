import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { NavController, ItemSliding, ToastController } from "ionic-angular";
import { Platform, ActionSheetController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
const ITEMS=[
    {name:"newformula", form:"mol", B:true, des:"Краткое описание формулы не более чем в две строки."},
    {name:"newformula", form:"png", B:true, des:"Краткое описание формулы не более чем в две строки."},
    {name:"newformula", form:"inchi", B:true, des:"Краткое описание формулы не более чем в две строки."},
    {name:"newformula", form:"smiles", B:true, des:"Краткое описание формулы не более чем в две строки."},
    {name:"newformula", form:"cml", B:true, des:"Краткое описание формулы не более чем в две строки."}
]



@Component({
    selector: 'page-files',
    templateUrl: 'files.html',
    providers:[SocialSharing]
})
export class Files{
    items=ITEMS;
    show:string="downloads";
    format:boolean=false;
    bttstyle:boolean=false;
    names:Array <string>;
    constructor(
        public navCtrl:NavController, 
        public platform: Platform,
        public actionsheetCtrl: ActionSheetController,
        private socialSharing: SocialSharing
){}
     close(item: ItemSliding) {
        item.close();
    }
     openMenu() {
         this.socialSharing.share('Body', 'Subject', ['recipient@example.org']).then(() => {
        
            }).catch(() => {
            
            });
      
  }
        
        removeItem(index){
            this.items.splice(index, 1);

        }
        getnames(ev){
            this.names=ev;
            if(this.names.length>0){
            for(let j=0; j<this.items.length; j++){
                this.items[j].B=false;
            }
            }
            else{
                for(let j=0; j<this.items.length; j++){
                this.items[j].B=true;
            }
        }
            this.itemFiltar();
        }
        itemFiltar(){
            console.log(this.names);
            
            for(let i=0; i<this.names.length; i++){
            for(let j=0; j<this.items.length; j++){
                if(this.names[i].toLocaleLowerCase()==this.items[j].form){
                    this.items[j].B=true;
                }
            }
            }
        }
}
