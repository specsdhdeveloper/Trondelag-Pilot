import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../../HomePage/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-activityComponent',
  templateUrl: './activityComponent.component.html',
  styleUrls: ['./activityComponent.component.scss']
})

export class ActivityComponentLandingPage implements OnInit {

  row : any;
  tableActivities : Array<any> = [];

  constructor(private spreadSheetJSONServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {

      this.tableActivities = this.spreadSheetJSONServiceVariable.DBArray2;
  }
}
