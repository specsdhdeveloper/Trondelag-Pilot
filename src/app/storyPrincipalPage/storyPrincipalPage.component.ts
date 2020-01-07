import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../HomePage/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-storyPrincipalPage',
  templateUrl: './storyPrincipalPage.component.html',
  styleUrls: ['./storyPrincipalPage.component.scss']
})
export class StoryPrincipalPage implements OnInit {

  constructor(private spreadSheetServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.data.subscribe((data:any) => console.log(data));
  }

}