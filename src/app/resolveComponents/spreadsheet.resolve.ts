import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
import { SpreadsheetService } from '../HomePage/spreadsheet.service';

@Injectable()
export class SpreadsheetResolver implements Resolve<any> {

    constructor(private spreadSheetJSONServiceVariable: SpreadsheetService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.spreadSheetJSONServiceVariable.getJSON();
    }
} 
