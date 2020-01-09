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
  haveImagesCarousel : boolean = false;
  haveVideo : boolean = false;

  constructor(private spreadSheetJSONServiceVariable: SpreadsheetService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
      this.row = this.spreadSheetJSONServiceVariable.GetRowByDestinationID(this.route.snapshot.paramMap.get('id'));

      if(this.row.carouselimages != "" && this.row.carouselimages != undefined)
          this.haveImagesCarousel = true;

      if(this.row.videofile != "" && this.row.videofile != undefined)
          this.haveVideo = true;
  }

  ngAfterViewInit() {
    setTimeout(() => {
    });
  }
}
