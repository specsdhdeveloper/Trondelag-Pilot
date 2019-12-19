import { Component, OnInit } from '@angular/core';
import { spreadSheetJSONService } from '../HomePage/spreadSheetJSON.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})

export class Tour implements OnInit {

    fieldsCards = 6;
    fieldsArtilces = 8;
    public cardsArray : any;
    public articlesArray : any;
    article : any;

    constructor(private spreadSheetJSONServiceVariable: spreadSheetJSONService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        console.log('tour');
        this.spreadSheetJSONServiceVariable.articlesArray = this.route.snapshot.data.tour.feed.entry;
        console.log(this.articlesArray);

        this.spreadSheetJSONServiceVariable.saveArticles();

        this.article = this.spreadSheetJSONServiceVariable.GetArticleByID(this.route.snapshot.paramMap.get('id'));
        console.log(this.article);
        console.log(this.route.snapshot.paramMap.get('id'));  

        
    }
}