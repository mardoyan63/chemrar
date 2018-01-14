import { Component, HostListener, Output, EventEmitter } from "@angular/core";
const FORMBTT=[
    {name:"Png", activ:false},
    {name:"mol", activ:false},
    {name:"inChi", activ:false},
    {name:"Smiles", activ:false},
    {name:"CML", activ:false},
]
@Component({
    selector: 'format-menu',
    templateUrl: 'formatmenu.html'
})
export class FormatMenu{
    formbtt=FORMBTT;
    names:Array<String>;
    @Output() formatUpdate = new EventEmitter <any>();
        @HostListener('mousedown', ['$event'])
    onMousedown(event) {
        this.names=new Array;
        for(let i=0; i<this.formbtt.length; i++){
            if(this.formbtt[i].name==event.srcElement.innerText){
                    this.formbtt[i].activ=!this.formbtt[i].activ;
                }
                if(this.formbtt[i].activ){
                    this.names.push(this.formbtt[i].name);
                }
        }   
            this.formatUpdate.emit(this.names);
    }
    getname(){
        
    }
    /*ngOnDestroy(){
        
    }*/
}