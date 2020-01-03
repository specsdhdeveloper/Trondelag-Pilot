import { Injectable } from '@angular/core';
import { Observable, Subscription, forkJoin  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class SpreadsheetService{

    public DBDestination: Array<any> = [];
    public DBStory: Array<any> = [];
    public DBActivity: Array<any> = [];

    public _jsonURLPage1 = 'https://spreadsheets.google.com/feeds/list/1uaOLwfifJWMhi3L0IJfkzvhwc8o4cukutJV0t3dcsAk/1/public/full?alt=json';
    public _jsonURLPage2 = 'https://spreadsheets.google.com/feeds/list/1uaOLwfifJWMhi3L0IJfkzvhwc8o4cukutJV0t3dcsAk/2/public/full?alt=json';
    public _jsonURLPage3 = 'https://spreadsheets.google.com/feeds/list/1uaOLwfifJWMhi3L0IJfkzvhwc8o4cukutJV0t3dcsAk/3/public/full?alt=json';

    public GetRowByID(id)
    {
      return this.DBDestination[id-1];
    }

    public getJSON(url, arrayTemp : Array<any>, value): Observable<any> {      
      return this.http.get(url)
        .pipe(
          map((res: any) => {
            const data = res.feed.entry;
            arrayTemp = new Array;
            if (data && data.length > 0) {
              data.forEach(entry => {
                const obj = {};
                for (const x in entry) {
                  if (x.includes('gsx$') && entry[x].$t) {
                    obj[x.split('$')[1]] = entry[x]['$t'];
                  }
                }
                arrayTemp.push(obj);
              });
            }
            this.fillArray(arrayTemp, value);
            return arrayTemp;
          }
        )
      );
    }

    public GetAllInformationDB() : Observable<any[]> {

      let call1 = this.getJSON(this._jsonURLPage1, this.DBDestination, 1);
      let call2 = this.getJSON(this._jsonURLPage2, this.DBStory, 2);
      let call3 = this.getJSON(this._jsonURLPage3, this.DBActivity, 3);

      return forkJoin([call1, call2, call3]);
    }

    public fillArray(arrayTemp : Array<any>, value)
    {
      if(value == 1)
      {
        this.DBDestination = arrayTemp;
        console.log(this.DBDestination);
      }
      else if(value == 2)
      {
        this.DBStory = arrayTemp;
      }
      else if(value == 3)
      {
        this.DBActivity = arrayTemp;
      }
    }

    constructor(private http: HttpClient, private route: ActivatedRoute) {
      route.data.subscribe((data:any) => console.log(data));
    }
}
