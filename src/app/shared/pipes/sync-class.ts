import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: "syncClass"
})

export class SyncCLassPipe implements PipeTransform{
    transform(value:any){
        return value.replace("-"," ");
    }
}