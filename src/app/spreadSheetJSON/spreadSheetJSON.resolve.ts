import { Injectable } from "@angular/core";  
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot  } from "@angular/router";  
import { Observable } from "rxjs";
import { spreadSheetJSONService } from '../spreadSheetJSON/spreadSheetJSON.service';
  
@Injectable()  
export class classResolve implements Resolve<any> {

    constructor(private spreadSheetJSONServiceVariable: spreadSheetJSONService) {}  

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.spreadSheetJSONServiceVariable.getArticlesJSON();
    }
} 