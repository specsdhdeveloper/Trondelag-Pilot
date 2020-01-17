import { Component, Input, OnInit } from '@angular/core';
import {SpreadsheetService} from '../services/spreadsheet.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carouselImages: string[]

  constructor(private spreadSheetJSONServiceVariable: SpreadsheetService,
              private route: ActivatedRoute,
              ) {
  }

  ngOnInit() {

    try {
      const path = this.route.snapshot.routeConfig.path.split('/')[0]
      const id = this.route.snapshot.paramMap.get('id')
      this.carouselImages = this.spreadSheetJSONServiceVariable.tables[path][id].carouselimages.split(',')
      console.log(this.carouselImages)
    } catch (error) {

    }

  }

}
