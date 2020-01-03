import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";
import { BackgroundVideoComponent } from 'app/background-video/background-video.component';
import { EsriMapComponent } from 'app/esri-map/esri-map.component';
import { ModelViewerComponent } from 'app/model-viewer/model-viewer.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-destination-page',
  templateUrl: './destination-page.component.html',
  styleUrls: ['./destination-page.component.css']
})

export class DestinationPageComponent implements OnInit {//, AfterViewInit {

    @ViewChild(ModelViewerComponent, {static: false} as any)
    private modelViewerComponent: ModelViewerComponent;

    row: any;
    table : Array<any> = [];

    constructor(private spreadSheetJSONServiceVariable: SpreadsheetService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.row = this.spreadSheetJSONServiceVariable.GetRowByID(this.route.snapshot.paramMap.get('id'));        
        console.log(this.route.snapshot.paramMap.get('id'));
        console.log(this.row);
    }


    ngAfterViewInit(){
        setTimeout(() => {
            this.modelViewerComponent.sketchfab_id = this.row.sketchfabid;
        });
    }
}
