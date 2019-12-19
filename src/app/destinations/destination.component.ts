import { Component, OnInit } from '@angular/core';
import { spreadSheetJSONService } from '../HomePage/spreadSheetJSON.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})

export class Destination implements OnInit {

    fieldsCards = 6;
    fieldsArtilces = 8;
    public cardsArray : any;
    public articlesArray : any;
    article : any;

    constructor(private spreadSheetJSONServiceVariable: spreadSheetJSONService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        console.log('destination');
        this.spreadSheetJSONServiceVariable.articlesArray = this.route.snapshot.data.destination.feed.entry;
        console.log(this.articlesArray);

        this.spreadSheetJSONServiceVariable.saveArticles();

        this.article = this.spreadSheetJSONServiceVariable.GetArticleByID(this.route.snapshot.paramMap.get('id'));
        console.log(this.article);
        console.log(this.route.snapshot.paramMap.get('id'));  

        
    }
}