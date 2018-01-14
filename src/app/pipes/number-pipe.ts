import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'format'
})

export class FormatPipe implements PipeTransform{
    masiv:any[] = [];
    str:string = '';
    str2:string='';
    transform(v1:string){
       this.str =  v1.slice(0,v1.length);
       for(let i=1; i<this.str.length; i++){
           if(i%3==0){
               this.str2+=' ' + this.str[i];
           }
            else{
                this.str2+=this.str[i];
            }
           this.str
       }
        return '+' + this.str2;
    }
}