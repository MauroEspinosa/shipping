import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: "truncate"
})

export class TruncatePipe implements PipeTransform {
    transform(value:any, long: number){
        let valor=value;
        if(value.length>long){
            valor=valor.substring(0,long)+"...";}
        return valor; 
    }
}