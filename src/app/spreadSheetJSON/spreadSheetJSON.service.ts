import { Injectable } from '@angular/core';
import { Observable, Subscription  } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

@Injectable()
export class spreadSheetJSONService{
    
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

    public getJSON(url_basic): Observable<any> {
        return this.http.get(url_basic);
    }

    constructor(private http: HttpClient) {}
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