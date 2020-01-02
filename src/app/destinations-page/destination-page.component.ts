import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../HomePage/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-destination-page',
  templateUrl: './destination-page.component.html',
  styleUrls: ['./destination-page.component.css']
})

export class DestinationPageComponent implements OnInit {

    row : any;
    table : Array<any> = [];

    constructor(private spreadSheetJSONServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

    }

    ngOnInit() {

        this.table = this.spreadSheetJSONServiceVariable.DBArray1;
        this.row = this.spreadSheetJSONServiceVariable.GetRowByID(this.route.snapshot.paramMap.get('id'));        
        console.log(this.route.snapshot.paramMap.get('id'));
        console.log(this.row);
    }
}
