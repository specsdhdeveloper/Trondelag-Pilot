import { Component, OnInit } from '@angular/core';
import { spreadSheetJSONService } from '../HomePage/spreadSheetJSON.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})

export class StoryComponent implements OnInit {

    fieldsCards = 6;
    fieldsArtilces = 8;
    public cardsArray : any;
    public articlesArray : any;
    article : any;

    constructor(private spreadSheetJSONServiceVariable: spreadSheetJSONService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        console.log('story');
        this.spreadSheetJSONServiceVariable.articlesArray = this.route.snapshot.data.story.feed.entry;
        console.log(this.articlesArray);

        this.spreadSheetJSONServiceVariable.saveArticles();

        this.article = this.spreadSheetJSONServiceVariable.GetArticleByID(this.route.snapshot.paramMap.get('id'));
        console.log(this.article);
        console.log(this.route.snapshot.paramMap.get('id'));  

        
    }
}