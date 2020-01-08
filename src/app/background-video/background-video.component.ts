import {Component, Input, OnInit} from '@angular/core';
import {SpreadsheetService} from '../services/spreadsheet.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-background-video',
  templateUrl: './background-video.component.html',
  styleUrls: ['./background-video.component.scss']
})
export class BackgroundVideoComponent implements OnInit {

  file: string

  constructor(private spreadSheetJSONServiceVariable: SpreadsheetService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.file = this.spreadSheetJSONServiceVariable.GetRowByDestinationID(this.route.snapshot.paramMap.get('id')).videofile;
  }

}
