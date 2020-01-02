import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
import { SpreadsheetService } from '../HomePage/spreadsheet.service';
import { Observable } from 'rxjs';

@Injectable()
export class SpreadsheetResolver implements Resolve<Observable<any[]>> {

    constructor(private spreadSheetJSONServiceVariable: SpreadsheetService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.spreadSheetJSONServiceVariable.GetAllInformationDB();
    }
} 
