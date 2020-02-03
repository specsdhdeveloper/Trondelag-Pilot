import { Component, OnInit } from '@angular/core';
import { SpreadsheetService} from '../services/spreadsheet.service';
import { ActivatedRoute, Router, ParamMap, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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
  splitsItin2 = [];
  splitWhatsIncluded = [];
  splitWhatsNotIncluded = [];

  constructor(private spreadSheetJSONServiceVariable: SpreadsheetService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    const myID = parseInt(this.route.snapshot.paramMap.get('id'))
    this.row = this.spreadSheetJSONServiceVariable.tables.activities.find(i => i.id === myID)

    this.haveImagesCarousel = (this.row.carouselImages != '' && this.row.carouselImages != undefined);
    this.haveVideo = (this.row.videofile != '' && this.row.videofile != undefined);

    try {
      this.splitsItin2 = [];
      this.splitWhatsIncluded = [];
      this.splitWhatsNotIncluded = [];
      this.splitsItin2 = this.row.itin2.split("--");
      this.splitWhatsIncluded = this.row.itinIncluded.split("--");
      this.splitWhatsNotIncluded = this.row.itinNotIncluded.split("--");
    }
    catch(e)
    {}
  }
}
