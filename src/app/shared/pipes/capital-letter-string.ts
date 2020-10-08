import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: "capitalLetter"
})

export class CapitalLetterPipe implements PipeTransform{
    transform(value:any){
        let str:string = value;
        str = str[0].toUpperCase() + str.slice(1);
        return str
    }
}