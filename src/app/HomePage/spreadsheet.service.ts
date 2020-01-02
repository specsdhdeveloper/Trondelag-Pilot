import { Injectable } from '@angular/core';
import { Observable, Subscription, forkJoin  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class SpreadsheetService{

    public DBArray1: Array<any> = [];
    public DBArray2: Array<any> = [];
    public DBArray3: Array<any> = [];

    public _jsonURLPage1 = 'https://spreadsheets.google.com/feeds/list/1uaOLwfifJWMhi3L0IJfkzvhwc8o4cukutJV0t3dcsAk/1/public/full?alt=json';
    public _jsonURLPage2 = 'https://spreadsheets.google.com/feeds/list/1uaOLwfifJWMhi3L0IJfkzvhwc8o4cukutJV0t3dcsAk/2/public/full?alt=json';
    public _jsonURLPage3 = 'https://spreadsheets.google.com/feeds/list/1uaOLwfifJWMhi3L0IJfkzvhwc8o4cukutJV0t3dcsAk/3/public/full?alt=json';

    public GetRowByID(id)
    {
      return this.DBArray1[id-1];
    }

    public getJSON1(): Observable<any> {      
      return this.http.get(this._jsonURLPage1)
        .pipe(
          map((res: any) => {
            const data = res.feed.entry;
            this.DBArray1 = new Array;
            console.log(res.feed.entry);
            if (data && data.length > 0) {
              data.forEach(entry => {
                const obj = {};
                for (const x in entry) {
                  if (x.includes('gsx$') && entry[x].$t) {
                    obj[x.split('$')[1]] = entry[x]['$t'];
                  }
                }
                this.DBArray1.push(obj);
              });
            }
            console.log(this.DBArray1);
            return this.DBArray1;
          }
        )
      );
    }

    public getJSON2(): Observable<any> {
      return this.http.get(this._jsonURLPage2)
        .pipe(
          map((res: any) => {
            const data = res.feed.entry;
            this.DBArray2 = new Array;
            console.log(res.feed.entry);
            if (data && data.length > 0) {
              data.forEach(entry => {
                const obj = {};
                for (const x in entry) {
                  if (x.includes('gsx$') && entry[x].$t) {
                    obj[x.split('$')[1]] = entry[x]['$t'];
                  }
                }                
                this.DBArray2.push(obj);
              });
            }
            console.log(this.DBArray2);
            return this.DBArray2;
          }
        )
      );
    }

    public getJSON3(): Observable<any> {      
      return this.http.get(this._jsonURLPage3)
        .pipe(
          map((res: any) => {
            const data = res.feed.entry;
            this.DBArray3 = new Array;
            console.log(res.feed.entry);
            if (data && data.length > 0) {
              data.forEach(entry => {
                const obj = {};
                for (const x in entry) {
                  if (x.includes('gsx$') && entry[x].$t) {
                    obj[x.split('$')[1]] = entry[x]['$t'];
                  }
                }
                this.DBArray3.push(obj);
              });
            }
            console.log(this.DBArray3);
            return this.DBArray3;
          }
        )
      );
    }

    public GetAllInformationDB() : Observable<any[]> {

      let call1 = this.getJSON1();
      let call2 = this.getJSON2();
      let call3 = this.getJSON3();

      return forkJoin([call1, call2, call3]);
    }

    constructor(private http: HttpClient, private route: ActivatedRoute) {

    }
}
