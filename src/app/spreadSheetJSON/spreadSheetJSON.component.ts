import { Component, OnInit } from '@angular/core';
import { spreadSheetJSONService } from '../spreadSheetJSON/spreadSheetJSON.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-spreadSheetJSON',
  templateUrl: './spreadSheetJSON.component.html',
  styleUrls: ['./spreadSheetJSON.component.css']
})

export class SpreadSheetJSON implements OnInit {

    fieldsCards = 6;
    fieldsArtilces = 8;
    public cardsArray : any;
    public articlesArray : any;

    constructor(private spreadSheetJSONServiceVariable: spreadSheetJSONService, private route: ActivatedRoute) {
        //this.callJSONCards();
        //this.callJSONArticles();
    }

    ngOnInit() {
        console.log('spreadSheetJSON');
        this.spreadSheetJSONServiceVariable.articlesArray = this.route.snapshot.data.spreadSheetJSON.feed.entry;
        console.log(this.articlesArray);

        this.spreadSheetJSONServiceVariable.saveArticles();
    }
}

class Card {

    ID: string;
    title: string;
    abstract: string;
    text: string;
    media: string;
    pageAsoc: string;

    constructor(ID, title, abstract, text, media, pageAsoc) {
        this.ID = ID;
        this.title = title;
        this.abstract = abstract;
        this.text = text;
        this.media = media;
        this.pageAsoc = pageAsoc;
    }
}

class Article {

    ID: string;
    title: string;
    abstract: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    media: string;

    constructor(ID, title, abstract, text1, text2, text3, text4, media) {
        this.ID = ID;
        this.title = title;
        this.abstract = abstract;
        this.text1 = text1;
        this.text2 = text2;
        this.text3 = text3;
        this.text4 = text4;
        this.media = media;
    }
}


