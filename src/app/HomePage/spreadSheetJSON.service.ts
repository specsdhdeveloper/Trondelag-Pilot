import { Injectable } from '@angular/core';
import { Observable, Subscription  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
export class spreadSheetJSONService{
    
    fieldsArtilces = 9;
    public articlesArray : any;

    public loadDB = false;
    public cards = new Array<Card>();
    public articles = new Array<Article>();
    public _jsonURLCards = 'https://spreadsheets.google.com/feeds/cells/1uaOLwfifJWMhi3L0IJfkzvhwc8o4cukutJV0t3dcsAk/1/public/full?alt=json';
    public _jsonURLArticles = 'https://spreadsheets.google.com/feeds/cells/1uaOLwfifJWMhi3L0IJfkzvhwc8o4cukutJV0t3dcsAk/2/public/full?alt=json';

    public GetArticleByCard(id)
    {
        return this.articles[id];
    }

    public GetArticleByID(id)
    {
        return this.articles[id];
    }

    public getArticlesJSON(): Observable<any> {
        return this.http.get(this._jsonURLArticles);
    }

    //Articles
    public callJSONArticles()
    {
        this.getArticlesJSON().subscribe(data => {
            console.log(data);     
            this.articlesArray = data.feed.entry;
            this.saveArticles();
            this.loadDB = true;
            });
    }

    public createArticle(ID, title, abstract, text1, text2, text3, text4, media, campo)
    {
        this.articles.push(new Article(ID, title, abstract, text1, text2, text3, text4, media, campo));
    }

    public saveArticles()
    {
        var aux = 0;

        for(let i = this.fieldsArtilces; i < this.articlesArray.length; i++)
        {
            aux++;
            if(aux == 8)
            {
                this.createArticle(this.articlesArray[i-8].gs$cell.inputValue, this.articlesArray[i-7].gs$cell.inputValue, this.articlesArray[i-6].gs$cell.inputValue, this.articlesArray[i-5].gs$cell.inputValue, this.articlesArray[i-4].gs$cell.inputValue, this.articlesArray[i-3].gs$cell.inputValue, this.articlesArray[i-2].gs$cell.inputValue, this.articlesArray[i-1].gs$cell.inputValue, this.articlesArray[i].gs$cell.inputValue);
                aux = 0;
            }
        }

        console.log(this.articles);
    }

    constructor(private http: HttpClient, private route: ActivatedRoute) {

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
    campo: string;

    constructor(ID, title, abstract, text1, text2, text3, text4, media, campo) {
        this.ID = ID;
        this.title = title;
        this.abstract = abstract;
        this.text1 = text1;
        this.text2 = text2;
        this.text3 = text3;
        this.text4 = text4;
        this.media = media;
        this.campo = campo;
    }
}