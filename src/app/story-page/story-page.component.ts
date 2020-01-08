import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";
import {ModelViewerComponent} from '../model-viewer/model-viewer.component';

@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.css']
})

export class StoryPageComponent implements OnInit, AfterViewInit {

  @ViewChild(ModelViewerComponent, {static: false} as any)
  private modelViewerComponent: ModelViewerComponent;

  row: any;
  table: Array<any> = [];

  constructor(private spreadSheetJSONServiceVariable: SpreadsheetService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
      this.table = this.spreadSheetJSONServiceVariable.DBStory;
      this.row = this.spreadSheetJSONServiceVariable.GetRowByStoryID(this.route.snapshot.paramMap.get('id'));
      console.log(this.row);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      //this.modelViewerComponent.sketchfabid = this.row.sketchfabid;
    });
  }
}
