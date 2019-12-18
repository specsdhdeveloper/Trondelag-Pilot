import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { take, map } from 'rxjs/operators'; 
import { spreadSheetJSONService } from '../spreadSheetJSON/spreadSheetJSON.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})

export class Prueba implements OnInit {

    //Representa la homePage
    id = 0;
    article : any;
    value = false;

    public cardsArray$ : any;

    constructor(private spreadSheetJSONServiceVariable: spreadSheetJSONService, private route: ActivatedRoute)
    {
        
    }

    ngOnInit() {
        
        console.log('prueba');
        this.article = this.spreadSheetJSONServiceVariable.GetArticleByID(0);
        //this.cardsArray$ = this.route.snapshot.data.spreadSheetJSON;
        //this.article = this.spreadSheetJSONServiceVariable.articlesArray[0];
        console.log(this.article);
        
    }
}