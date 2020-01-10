import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-story-PrincipalPage',
  templateUrl: './story-PrincipalPage.component.html',
  styleUrls: ['./story-PrincipalPage.component.scss']
})
export class StoryPrincipalPage implements OnInit {

  tableStories : Array<any> = [];
  tableBlock1 : Array<any> = [];
  tableBlock2 : Array<any> = [];
  tableBlock3 : Array<any> = [];

  constructor(private spreadSheetServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    
    window.scrollTo(0, 0);
    //this.route.data.subscribe((data:any) => console.log(data));
    this.tableStories = this.spreadSheetServiceVariable.DBStory;

    for(let i = 0; i < this.tableStories.length; i++)
    {      
      if(this.tableStories[i].inblockact == "1") 
      {        
        this.tableBlock1.push(this.tableStories[i]);
      }
      else if(this.tableStories[i].inblockact == "2")
      {
        this.tableBlock2.push(this.tableStories[i]);
      }
      else if(this.tableStories[i].inblockact == "3")
      {
        this.tableBlock3.push(this.tableStories[i]);
      }
    }
  }

}