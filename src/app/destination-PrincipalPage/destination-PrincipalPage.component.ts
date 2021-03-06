import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-destination-PrincipalPage',
  templateUrl: './destination-PrincipalPage.component.html',
  styleUrls: ['./destination-PrincipalPage.component.scss']
})
export class DestinationPrincipalPage implements OnInit {

  tableDestination : Array<any> = [];
  tableBlock1 : Array<any> = [];
  tableBlock2 : Array<any> = [];
  tableBlock3 : Array<any> = [];

  constructor(private spreadSheetServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    window.scrollTo(0, 0);

  }

}