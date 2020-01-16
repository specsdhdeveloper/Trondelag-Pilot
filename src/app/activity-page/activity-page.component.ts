import { Component, OnInit } from '@angular/core';
import { SpreadsheetService} from '../services/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.scss']
})

export class ActivityPageComponent implements OnInit {

  row : any;
  table : Array<any> = [];
  haveImagesCarousel : boolean = false;
  haveVideo : boolean = false;

  constructor(private spreadSheetJSONServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    window.scrollTo(0, 0);
    this.row = this.spreadSheetJSONServiceVariable.tables.activity[this.route.snapshot.paramMap.get('id')];

    if(this.row.carouselimages != "" && this.row.carouselimages != undefined)
      this.haveImagesCarousel = true;

    if(this.row.videofile != "" && this.row.videofile != undefined)
      this.haveVideo = true;
  }
}
