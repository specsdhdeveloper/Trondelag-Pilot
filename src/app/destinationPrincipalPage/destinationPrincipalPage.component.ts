import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-destinationPrincipalPage',
  templateUrl: './destinationPrincipalPage.component.html',
  styleUrls: ['./destinationPrincipalPage.component.scss']
})
export class DestinationPrincipalPage implements OnInit {

  constructor(private spreadSheetServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.data.subscribe((data:any) => console.log(data));
  }

}