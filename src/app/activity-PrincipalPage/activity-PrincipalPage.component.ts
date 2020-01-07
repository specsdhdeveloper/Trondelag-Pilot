import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-activity-PrincipalPage',
  templateUrl: './activity-PrincipalPage.component.html',
  styleUrls: ['./activity-PrincipalPage.component.scss']
})
export class ActivityPrincipalPage implements OnInit {

  constructor(private spreadSheetServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.data.subscribe((data:any) => console.log(data));
  }

}