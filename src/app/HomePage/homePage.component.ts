import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from './spreadsheet.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css']
})

export class HomePage implements OnInit {

    fieldsCards = 6;
    fieldsArtilces = 8;
    public cardsArray : any;
    public articlesArray : any;

    article : any;

    constructor(private spreadSheetServiceVariable: SpreadsheetService, private route: ActivatedRoute) {

    }

    ngOnInit() {

        this.article = this.spreadSheetServiceVariable.GetArticleByID(this.route.snapshot.paramMap.get('id'));
        console.log(this.article.media);
        console.log(this.route.snapshot.paramMap.get('id'));
    }
}


