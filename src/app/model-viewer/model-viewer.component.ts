import { Component, OnInit, Input } from '@angular/core';
import {SpreadsheetService} from '../services/spreadsheet.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-model-viewer',
  templateUrl: './model-viewer.component.html',
  styleUrls: ['./model-viewer.component.scss']
})
export class ModelViewerComponent implements OnInit {

  @Input() sketchfabId: string;

  constructor(private spreadSheetJSONServiceVariable: SpreadsheetService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const destinationID = parseInt(this.route.snapshot.paramMap.get('id'))
    this.sketchfabId = this.spreadSheetJSONServiceVariable.tables.destinations.find(i => i.id === destinationID).sketchfabModel
    console.log(this.sketchfabId)

    //hardcode it for now
    this.sketchfabId = "b2afbc447a8b443d84fa0e54358fe716"
    console.log("sketchfab")
  }

}
