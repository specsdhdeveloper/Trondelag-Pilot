import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { take, map } from 'rxjs/operators'; 
import { spreadSheetJSONService } from '../HomePage/spreadSheetJSON.service';

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
        
        this.article = this.spreadSheetJSONServiceVariable.GetArticleByID(this.route.snapshot.paramMap.get('id'));
        console.log(this.article);
        console.log(this.route.snapshot.paramMap.get('id'));
        
    }
}