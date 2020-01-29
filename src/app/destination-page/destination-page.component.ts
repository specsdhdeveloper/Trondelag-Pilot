import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute } from '@angular/router';
import { ModelViewerComponent } from 'app/model-viewer/model-viewer.component';

@Component({
  selector: 'app-destination-page',
  templateUrl: './destination-page.component.html',
  styleUrls: ['./destination-page.component.css']
})

export class DestinationPageComponent implements OnInit {// , AfterViewInit {

    @ViewChild(ModelViewerComponent, {static: false} as any)
    private modelViewerComponent: ModelViewerComponent;

    row: any;
    table: Array<any> = [];
    haveImagesCarousel = false;
    haveVideo = false;
    haveModel = false;

    constructor(private spreadSheetJSONServiceVariable: SpreadsheetService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {

        window.scrollTo(0, 0);
        const myID = parseInt(this.route.snapshot.paramMap.get('id'))
        this.row = this.spreadSheetJSONServiceVariable.tables.destinations.find(i => i.id === myID);

        this.haveImagesCarousel = (this.row.carouselimages != '' && this.row.carouselimages != undefined)
        this.haveVideo = (this.row.videofile != '' && this.row.videofile != undefined)
        this.haveModel = (this.row.sketchfabModel != '' && this.row.sketchfabModel != undefined)

    }

}
