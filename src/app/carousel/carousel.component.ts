import { Component, Input, OnInit } from '@angular/core';
import {SpreadsheetService} from '../HomePage/spreadsheet.service';
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
    this.carouselImages = this.spreadSheetJSONServiceVariable.GetRowByID(this.route.snapshot.paramMap.get('id')).carouselimages.split(',')
    console.log(this.carouselImages)
  }

}
