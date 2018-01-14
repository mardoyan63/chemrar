import { Component, HostListener, ViewChild} from "@angular/core";
import { ViewController } from "ionic-angular";
const ITEMS=[
    [{name:'Li', B:false, color:'#ed5d3f'}, {name:'Be', B:false, color:'#f7931e'},],
    [{name:'Na', B:false, color:'#ed5d3f'}, {name:'Mg', B:false, color:'#f7931e'},],
    [{name:'K', B:false, color:'#ed5d3f'}, {name:'Ca', B:false, color:'#f7931e'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},],
    [{name:'Rb', B:false, color:'#ed5d3f'}, {name:'Sr', B:false, color:'#f7931e'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},],
    [{name:'Cs', B:false, color:'#ed5d3f'}, {name:'Ba', B:false, color:'#f7931e'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},],
    [{name:'Fr', B:false, color:'#ed5d3f'}, {name:'Ra', B:false, color:'#f7931e'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},{name:'', B:false, color:'#ffdd02'},],


]
@Component({
    selector: "atom-page",
    templateUrl: 'atom-menu.html'
})

export class Atom{
    items=ITEMS;
    str:string="black";
    charge:number=3;
    izotop:number=87;
    hidro:number=9;
    myParam: string;
    text:string='';
    @HostListener('mousedown', ['$event'])
    onMousedown(event) {
        console.log(event);
        for(let i=0; i<this.items.length; i++){
            for(let j=0; j<this.items[i].length; j++){
                if(this.items[i][j].name==event.srcElement.innerText){
                    this.items[i][j].B=true;
                }
                else{
                    this.items[i][j].B=false;
                }    
            }
        }   
    }

     constructor(
    public viewCtrl: ViewController,
  ) {
  }
    dismiss() {
    this.viewCtrl.dismiss();
        for(let i=0; i<this.items.length; i++){
            for(let j=0; j<this.items[i].length; j++){
                if(this.items[i][j].B==true){
                    this.items[i][j].B=false; 
                }
            }
        } 
  }
    dismissOk(){
        this.viewCtrl.dismiss();
        for(let i=0; i<this.items.length; i++){
            for(let j=0; j<this.items[i].length; j++){
                    if(this.items[i][j].B==true){
                    this.items[i][j].B=false; 
                }
            }
        } 
    }
  /*filterItems(ev:any){
      let val=ev.target.value;
      for(let i=0; i<this.items.length; i++){
          for(let j=0; j<this.items[i].length; j++){
              if(this.items[i][j].name==val){
                  this.items[i][j].B=true;
              }
                else{
                    this.items[i][j].B=false;
                    console.log(ev)
                }
          }
      }
      
  }*/
    
}
