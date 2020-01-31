import { Component, OnInit } from '@angular/core';
import { SpreadsheetService} from '../services/spreadsheet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.scss']
})

export class ActivityPageComponent implements OnInit {

  row: any;
  table: Array<any> = [];
  haveImagesCarousel = false;
  haveVideo = false;
  splits = [];

  constructor(private spreadSheetJSONServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    window.scrollTo(0, 0);
    const myID = parseInt(this.route.snapshot.paramMap.get('id'))
    this.row = this.spreadSheetJSONServiceVariable.tables.activities.find(i => i.id === myID)

    this.haveImagesCarousel = (this.row.carouselimages != '' && this.row.carouselimages != undefined);
    this.haveVideo = (this.row.videofile != '' && this.row.videofile != undefined);

    try {
      this.splits = this.row.itin2.split("--");
      console.log(this.splits);
    }
    catch(e)
    {}

  }
}
