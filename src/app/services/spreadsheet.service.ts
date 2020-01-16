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
        destination: [],
        story: [],
        activity: [],
        media: [],
        landing: [],
        storiesPrincipal: [],
        destinationsPrincipal: [],
        activitiesPrincipal: [],
        mediaHeader: []
    }

    public GetRowByID(id, path) {
        return this.tables[path][id]
    }

    public getJSON(url, table): Observable<any> {
      return this.http.get(url)
        .pipe(
          map((res: any) => {
            const data = res.feed.entry;
            const returnArray = new Array;
            if (data && data.length > 0) {
              data.forEach(entry => {
                const obj = {};
                for (const x in entry) {
                  if (x.includes('gsx$') && entry[x].$t) {
                    obj[x.split('$')[1]] = entry[x]['$t'];
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

    getJsonUrlPage(index) {
        return 'https://spreadsheets.google.com/feeds/list/1uaOLwfifJWMhi3L0IJfkzvhwc8o4cukutJV0t3dcsAk/' + index + '/public/full?alt=json';
    }

    public GetAllInformationDB(): Observable<any[]> {

        let i = 1;
        const calls = [];
        Object.keys(this.tables).forEach(key => {
            calls.push(this.getJSON(this.getJsonUrlPage(i), key));
            i++;
        })

      return forkJoin(calls);
    }

    constructor(private http: HttpClient, private route: ActivatedRoute) {
      // route.data.subscribe((data:any) => console.log(data));
    }
}
