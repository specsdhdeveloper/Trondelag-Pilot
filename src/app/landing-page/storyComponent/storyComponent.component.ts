import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../../services/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-storyComponent',
  templateUrl: './storyComponent.component.html',
  styleUrls: ['./storyComponent.component.scss']
})

export class StoryComponentLandingPage implements OnInit {

  row : any;
  tableStories : Array<any> = [];

  constructor(private spreadSheetJSONServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {

      this.tableStories = this.spreadSheetJSONServiceVariable.DBStory;
  }
}
