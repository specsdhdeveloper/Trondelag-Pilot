import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-model-viewer',
  templateUrl: './model-viewer.component.html',
  styleUrls: ['./model-viewer.component.scss']
})
export class ModelViewerComponent implements OnInit {

  @Input() sketchfab_id: string;

  constructor(public sanitizer: DomSanitizer){}

  ngOnInit() {
  }

}
