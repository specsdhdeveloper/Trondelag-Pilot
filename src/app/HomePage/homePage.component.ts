import { Component, OnInit } from '@angular/core';
import { spreadSheetJSONService } from './spreadSheetJSON.service';
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

    constructor(private spreadSheetJSONServiceVariable: spreadSheetJSONService, private route: ActivatedRoute) {

    }

    ngOnInit() {

        //this.spreadSheetJSONServiceVariable.getArticlesJSON();

        /*console.log('spreadSheetJSON');
        this.spreadSheetJSONServiceVariable.articlesArray = this.route.snapshot.data.homePage.feed.entry;
        console.log(this.articlesArray);

        this.spreadSheetJSONServiceVariable.saveArticles();

        this.article = this.spreadSheetJSONServiceVariable.GetArticleByID(this.route.snapshot.paramMap.get('id'));
        console.log(this.article);
        console.log(this.route.snapshot.paramMap.get('id')); */
    }
}


