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
    //TODO find more elegant way than substracting 1
    this.row = this.spreadSheetJSONServiceVariable.tables.stories[this.route.snapshot.paramMap.get('id')-1];

    if (this.row.carouselimages != '' && this.row.carouselimages != undefined) {
        this.haveImagesCarousel = true;
    }

    if (this.row.videofile != '' && this.row.videofile != undefined) {
        this.haveVideo = true;
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
    });
  }
}
