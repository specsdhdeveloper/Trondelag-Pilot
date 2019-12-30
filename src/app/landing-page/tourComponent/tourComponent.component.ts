import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../../HomePage/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tourComponent',
  templateUrl: './tourComponent.component.html',
  styleUrls: ['./tourComponent.component.scss']
})

export class TourComponentLandingPage implements OnInit {

  row : any;
  table : Array<any> = [];

  constructor(private spreadSheetJSONServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {

      this.table = this.spreadSheetJSONServiceVariable.DBArray;
      this.row = this.spreadSheetJSONServiceVariable.GetRowByID(this.route.snapshot.paramMap.get('id'));
  }
}
