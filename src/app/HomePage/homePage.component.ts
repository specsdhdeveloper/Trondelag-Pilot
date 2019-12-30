import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from './spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css']
})

export class HomePage implements OnInit {

    row : any;

    constructor(private spreadSheetServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

    }

    ngOnInit() {

        this.row = this.spreadSheetServiceVariable.GetRowByID(this.route.snapshot.paramMap.get('id'));
    }
}


