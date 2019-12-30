import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../HomePage/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-landinghome-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  row : any;
  table : Array<any> = [];

  constructor(private spreadSheetServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {

      this.table = this.spreadSheetServiceVariable.DBArray;
      console.log(this.table);
      this.row = this.spreadSheetServiceVariable.GetRowByID(this.route.snapshot.paramMap.get('id'));
      console.log(this.row);
      console.log(this.route.snapshot.paramMap.get('id'));
  }

}
