import { Component, OnInit } from '@angular/core';
import { spreadSheetJSONService } from '../spreadSheetJSON/spreadSheetJSON.service';

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

    constructor(private spreadSheetJSONServiceVariable: spreadSheetJSONService) {
        this.callJSONCards();
        this.callJSONArticles();
    }

    //CARDS
    public callJSONCards()
    {
        this.spreadSheetJSONServiceVariable.getJSON(this.spreadSheetJSONServiceVariable._jsonURLCards).subscribe(data => {
            //console.log(data);     
            this.cardsArray = data.feed.entry;
            this.saveCards();
            });
    }

    public createCard(ID, title, abstract, text, media, pageAsoc)
    {
        this.spreadSheetJSONServiceVariable.cards.push(new Card(ID, title, abstract, text, media, pageAsoc));
    }

    public saveCards()
    {
        var aux = 0;

        for(let i = this.fieldsCards; i < this.cardsArray.length; i++)
        {
            aux++;
            if(aux == 6)
            {
                this.createCard(this.cardsArray[i-5].gs$cell.inputValue, this.cardsArray[i-4].gs$cell.inputValue, this.cardsArray[i-3].gs$cell.inputValue, this.cardsArray[i-2].gs$cell.inputValue, this.cardsArray[i-1].gs$cell.inputValue, this.cardsArray[i].gs$cell.inputValue);
                aux = 0;
            }
        }

        console.log(this.spreadSheetJSONServiceVariable.cards);
    }

    //Articles
    public callJSONArticles()
    {
        this.spreadSheetJSONServiceVariable.getJSON(this.spreadSheetJSONServiceVariable._jsonURLArticles).subscribe(data => {
            //console.log(data);     
            this.articlesArray = data.feed.entry;
            this.saveArticles();
            this.spreadSheetJSONServiceVariable.loadDB = true;
            });
    }

    public createArticle(ID, title, abstract, text1, text2, text3, text4, media)
    {
        this.spreadSheetJSONServiceVariable.articles.push(new Article(ID, title, abstract, text1, text2, text3, text4, media));
    }

    public saveArticles()
    {
        var aux = 0;

        for(let i = this.fieldsArtilces; i < this.articlesArray.length; i++)
        {
            aux++;
            if(aux == 8)
            {
                this.createArticle(this.articlesArray[i-7].gs$cell.inputValue, this.articlesArray[i-6].gs$cell.inputValue, this.articlesArray[i-5].gs$cell.inputValue, this.articlesArray[i-4].gs$cell.inputValue, this.articlesArray[i-3].gs$cell.inputValue, this.articlesArray[i-2].gs$cell.inputValue, this.articlesArray[i-1].gs$cell.inputValue, this.articlesArray[i].gs$cell.inputValue);
                aux = 0;
            }
        }

        console.log(this.spreadSheetJSONServiceVariable.articles);
    }

    //Articles

    ngOnInit() {

        //this.callJSONCards();
        //this.callJSONArticles();  
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


