import { AbstractControl } from "@angular/forms";
import { NullAstVisitor } from '@angular/compiler';
import { CPs } from  './CPs'

export function passwordConfirm (control: AbstractControl) : {[key:string]:any} | null{
    let password=control.get('password').value;
    let confirmation=control.get('confirm').value;

    return password===confirmation ? null : {"notMatching":"Las contraseñas no coinciden"}
} 

export function rightStore(brandName: string){
    return (control: AbstractControl) : {[key:string]:any} | null =>{
        let str=control.value
        if(str){    
            let temp=str.match(brandName)
            if(temp==null)
               return {"wrongStore":true}
            return null;
        }
    }
}

export function validCP (control: AbstractControl) : {[key:string]:any} | null{
    let cp=control.value;
    if(CPs.indexOf(cp)===-1){
        return {"invalidCP":true}
    }
    return null
} 