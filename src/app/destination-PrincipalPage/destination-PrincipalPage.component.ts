import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-destination-PrincipalPage',
  templateUrl: './destination-PrincipalPage.component.html',
  styleUrls: ['./destination-PrincipalPage.component.scss']
})
export class DestinationPrincipalPage implements OnInit {

  tableDestination : Array<any> = [];
  tableBlock1 : Array<any> = [];
  tableBlock2 : Array<any> = [];
  tableBlock3 : Array<any> = [];

  constructor(private spreadSheetServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

  }

  ngOnInit() {

        //this.route.data.subscribe((data:any) => console.log(data));
        this.tableDestination = this.spreadSheetServiceVariable.DBDestination;

        for(let i = 0; i < this.tableDestination.length; i++)
        {      
          if(this.tableDestination[i].inblockact == "1") 
          {        
            this.tableBlock1.push(this.tableDestination[i]);
          }
          else if(this.tableDestination[i].inblockact == "2")
          {
            this.tableBlock2.push(this.tableDestination[i]);
          }
          else if(this.tableDestination[i].inblockact == "3")
          {
            this.tableBlock3.push(this.tableDestination[i]);
          }
        }

  }

}