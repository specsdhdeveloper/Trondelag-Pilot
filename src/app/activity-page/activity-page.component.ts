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
  itin2Array : Array<any> = [];
  splits : any;

  constructor(private spreadSheetJSONServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    window.scrollTo(0, 0);
    //this.row = this.spreadSheetJSONServiceVariable.GetRowByActivityID(this.route.snapshot.paramMap.get('id'));

    this.route.paramMap.subscribe(params => {
      this.row = this.spreadSheetJSONServiceVariable.GetRowByActivityID(params.get('id'));
      this.splits = [];
      try {
        this.splits = this.row.itin2.split("--");
        console.log(this.splits);
      }
      catch(e)
      {}
      
    });

    if(this.row.carouselimages != "" && this.row.carouselimages != undefined)
      this.haveImagesCarousel = true;

    if(this.row.videofile != "" && this.row.videofile != undefined)
      this.haveVideo = true;
  }
}
