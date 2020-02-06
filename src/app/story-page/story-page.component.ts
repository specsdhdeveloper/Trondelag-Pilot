import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute } from '@angular/router';
import {ModelViewerComponent} from '../model-viewer/model-viewer.component';

@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.scss']
})

export class StoryPageComponent implements OnInit, AfterViewInit {

  @ViewChild(ModelViewerComponent, {static: false} as any)
  private modelViewerComponent: ModelViewerComponent;

  row: any;
  table: Array<any> = [];
  haveImagesCarousel = false;
  haveVideo = false;

  constructor(private spreadSheetJSONServiceVariable: SpreadsheetService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);

    const myID = parseInt(this.route.snapshot.paramMap.get('id'))
    this.row = this.spreadSheetJSONServiceVariable.tables.stories.find(i => i.id === myID)
    this.haveImagesCarousel = (this.row.carouselImages != '' && this.row.carouselImages != undefined);
    this.haveVideo = this.row.videofile != '' && this.row.videofile != undefined;

  }

  ngAfterViewInit() {
    setTimeout(() => {
    });
  }
}
