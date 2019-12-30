import { Injectable } from '@angular/core';
import { Observable, Subscription  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class SpreadsheetService{

    public DBArray: Array<any> = [];

    public _jsonURLArticles = 'https://spreadsheets.google.com/feeds/list/1uaOLwfifJWMhi3L0IJfkzvhwc8o4cukutJV0t3dcsAk/2/public/full?alt=json';

    public GetRowByID(id)
    {
      return this.DBArray[id];
    }

    public getJSON(): Observable<any> {
      return this.http.get(this._jsonURLArticles)
        .pipe(
          map((res: any) => {
            const data = res.feed.entry;
            this.DBArray = new Array;
            if (data && data.length > 0) {
              data.forEach(entry => {
                const obj = {};
                for (const x in entry) {
                  if (x.includes('gsx$') && entry[x].$t) {
                    obj[x.split('$')[1]] = entry[x]['$t'];
                  }
                }
                this.DBArray.push(obj);
              });
            }
            console.log(this.DBArray);
            return this.DBArray;
          }
        )
      );
    }

    constructor(private http: HttpClient, private route: ActivatedRoute) {

    }
}
