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
    //TODO find more elegant way than substracting 1
    this.row = this.spreadSheetJSONServiceVariable.tables.activities[this.route.snapshot.paramMap.get('id')-1];

    if(this.row.carouselimages != "" && this.row.carouselimages != undefined)
      this.haveImagesCarousel = true;

    if(this.row.videofile != "" && this.row.videofile != undefined)
      this.haveVideo = true;
  }
}
