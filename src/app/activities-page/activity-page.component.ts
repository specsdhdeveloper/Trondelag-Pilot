import { Component, OnInit } from '@angular/core';
import { SpreadsheetService} from '../HomePage/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.css']
})

export class ActivityPageComponent implements OnInit {

  row : any;
  table : Array<any> = [];

  constructor(private spreadSheetJSONServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {

      this.row = this.spreadSheetJSONServiceVariable.GetRowByID(this.route.snapshot.paramMap.get('id'));
  }
}
