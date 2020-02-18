import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})

export class DashboardComponent implements OnInit {


    constructor(private spreadSheetJSONServiceVariable: SpreadsheetService, private route: ActivatedRoute,  private router: Router) {

    }

    ngOnInit() {

        window.scrollTo(0, 0);


    }

}