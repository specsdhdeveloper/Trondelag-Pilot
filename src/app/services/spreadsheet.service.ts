import { Injectable } from '@angular/core';
import { Observable, Subscription, forkJoin  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class SpreadsheetService {

    // the sheets in the spreadsheet must be in that order
    tables = {
        destinations: [],
        stories: [],
        activities: []
    }

    public getJSON(url, table): Observable<any> {
        return this.http.get(url + table)
            .pipe(
                map((res: any) => {
                        console.log(res)
                        const data = res
                        this.tables[table] = data
                        return data;
                    }
                )
            );
    }

    public GetAllInformationDB(): Observable<any[]> {

        const calls = [];
        Object.keys(this.tables).forEach(table => {
            console.log("getting " + 'http://localhost:1337/' + table)
            calls.push( this.getJSON('http://localhost:1337/', table));
        })

        return forkJoin(calls);
    }

    constructor(private http: HttpClient, private route: ActivatedRoute) {
      // route.data.subscribe((data:any) => console.log(data));
    }
}
