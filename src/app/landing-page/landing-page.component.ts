import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-landinghome-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class LandingPageComponent implements OnInit {

  constructor(private spreadSheetServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.data.subscribe((data:any) => console.log(data));
    window.scrollTo(0, 0);
  }

}
