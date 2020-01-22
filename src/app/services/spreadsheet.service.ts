import { Injectable } from '@angular/core';
import { Observable, Subscription, forkJoin  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class SpreadsheetService { //TODO rename to API service

    // the sheets in the spreadsheet must be in that order
    tables = {
        destinations: [],
        stories: [],
        activities: []
    }

    apiUrl = 'http://54.228.244.252:1337/'

    imgFields = ['cardImg', 'imgLeft', 'imgRight', 'imgLeftBottom', 'mapImg']

    public getJSON(url, table): Observable<any> {
        return this.http.get(url + table)
            .pipe(
                map((res: any) => {
                    const data = res;
                    const returnArray = new Array;
                    if (data && data.length > 0) {
                        data.forEach(entry => {
                            const obj = {};
                            for (const x in entry) {
                                for (let field of this.imgFields) {
                                    if (x == field && entry[field] != null) {
                                        obj[field + 'Url'] = entry[field].url
                                    } else {
                                        obj[x] = entry[x]
                                    }
                                }
                            }
                            returnArray.push(obj);
                        });
                    }
                    this.tables[table] = returnArray;
                    return returnArray;
                }
                )
            );
    }

    public GetAllInformationDB(): Observable<any[]> {

        const calls = [];
        Object.keys(this.tables).forEach(table => {
            calls.push( this.getJSON(this.apiUrl, table));
        })

        return forkJoin(calls);
    }

    constructor(private http: HttpClient, private route: ActivatedRoute) {
      // route.data.subscribe((data:any) => console.log(data));
    }
}
