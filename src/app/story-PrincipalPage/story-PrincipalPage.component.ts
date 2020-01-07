import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-story-PrincipalPage',
  templateUrl: './story-PrincipalPage.component.html',
  styleUrls: ['./story-PrincipalPage.component.scss']
})
export class StoryPrincipalPage implements OnInit {

  constructor(private spreadSheetServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.data.subscribe((data:any) => console.log(data));
  }

}