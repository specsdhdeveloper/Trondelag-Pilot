import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../../services/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-destinationComponent',
  templateUrl: './destinationComponent.component.html',
  styleUrls: ['./destinationComponent.component.scss']
})

export class DestinationComponentLandingPage implements OnInit {

  row : any;
  tableDestinations : Array<any> = [];

  constructor(private spreadSheetJSONServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {
      this.tableDestinations = this.spreadSheetJSONServiceVariable.tables.destination;
      this.tableDestinations.pop();
  }
}
