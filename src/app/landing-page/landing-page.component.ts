import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../HomePage/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-landinghome-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private spreadSheetServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {

  }

}
