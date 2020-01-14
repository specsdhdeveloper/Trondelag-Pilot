import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-story-PrincipalPage',
  templateUrl: './story-PrincipalPage.component.html',
  styleUrls: ['./story-PrincipalPage.component.scss']
})
export class StoryPrincipalPage implements OnInit {

  tableStories : Array<any> = [];

  constructor(private spreadSheetServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    
    window.scrollTo(0, 0);
    this.tableStories = this.spreadSheetServiceVariable.DBStory;
  }

}