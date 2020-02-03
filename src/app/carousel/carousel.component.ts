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
  row : any;

  constructor(private spreadSheetJSONServiceVariable: SpreadsheetService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    try {
      
      var path = this.route.snapshot.routeConfig.path.split('/')[0];
      var id = this.route.snapshot.paramMap.get('id');

      if(path == "story" || path == "stories")
      {
        for(let i = 0; i < this.spreadSheetJSONServiceVariable.tables.stories.length; i++)
        {
          if(this.spreadSheetJSONServiceVariable.tables.stories[i].id == id)
          {
            this.row = this.spreadSheetJSONServiceVariable.tables.stories[i];
            this.carouselImages = this.spreadSheetJSONServiceVariable.tables.stories[i].carouselImages;
          }
        }
      }
      else if(path == "activity" || path == "activities")
      {
        for(let i = 0; i < this.spreadSheetJSONServiceVariable.tables.activities.length; i++)
        {
          if(this.spreadSheetJSONServiceVariable.tables.stories[i].id == id)
          {
            this.row = this.spreadSheetJSONServiceVariable.tables.stories[i];
            this.carouselImages = this.spreadSheetJSONServiceVariable.tables.stories[i].carouselImages;
          }
        }
      }
      else if(path == "destination" || path == "destinations")
      {
        for(let i = 0; i < this.spreadSheetJSONServiceVariable.tables.destinations.length; i++)
        {
          if(this.spreadSheetJSONServiceVariable.tables.stories[i].id == id)
          {
            this.row = this.spreadSheetJSONServiceVariable.tables.stories[i];
            this.carouselImages = this.spreadSheetJSONServiceVariable.tables.stories[i].carouselImages;
          }
        }
      }
      
    } catch (error) {}
  }
}
