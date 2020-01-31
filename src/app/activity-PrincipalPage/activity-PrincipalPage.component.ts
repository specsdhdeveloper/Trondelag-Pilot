import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-activity-PrincipalPage',
  templateUrl: './activity-PrincipalPage.component.html',
  styleUrls: ['./activity-PrincipalPage.component.scss']
})
export class ActivityPrincipalPage implements OnInit {

  tableActivities: Array<any> = [];
  tableBlock1: Array<any> = [];
  tableBlock2: Array<any> = [];
  tableBlock3: Array<any> = [];

  constructor(private spreadSheetServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    window.scrollTo(0, 0);
    this.tableActivities = this.spreadSheetServiceVariable.tables.activities;

    for (let i = 0; i < this.tableActivities.length; i++) {
      console.log(this.tableActivities[i]);
      if (this.tableActivities[i].inBlockAct == '1') {
        this.tableBlock1.push(this.tableActivities[i]);
      } else if (this.tableActivities[i].inBlockAct == '2') {
        this.tableBlock2.push(this.tableActivities[i]);
      } else if (this.tableActivities[i].inBlockAct == '3') {
        this.tableBlock3.push(this.tableActivities[i]);
      }
    }
  }

}
