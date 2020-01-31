import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { Observable, Subscription, forkJoin  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-landinghome-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class LandingPageComponent implements OnInit {

  constructor(private spreadSheetServiceVariable: SpreadsheetService, private route: ActivatedRoute, private http: HttpClient) {

  }

  ngOnInit() {
    //"https://specs.owncube.com/index.php/s/dCM64UvY79Fj1vr/download?path=%2F&files=Overview-cropped_h264-800p.mp4"
    this.route.data.subscribe((data:any) => console.log(data));
    window.scrollTo(0, 0);

  }

}
