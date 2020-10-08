import { Pipe, PipeTransform } from '@angular/core'
import { Router } from '@angular/router'

@Pipe({
    name: "searchbar"
})

export class SearchbarPipe implements PipeTransform{
    constructor(private router: Router){}

    transform(value: any[], search: string){
        if(this.router.url.indexOf('realizadas/recibidas') > -1){
            if(!search) return value
            else{
                let filteredItems=value.filter(i=>i.suborder==search)
                return filteredItems
            }
        }
        
        if(this.router.url.indexOf("realizadas/en-camino") > -1){
            if(!search) return value
            else{
                let filteredItems=value.filter(i=>i.brandOrderNumber==search)
                if(filteredItems.length>0) return filteredItems
                else{
                    let deepFilteredItems=value.filter(order=>order.trackingNumbers.some(track=>track.number==search))
                    return deepFilteredItems
                }
            }
        }
    }
}