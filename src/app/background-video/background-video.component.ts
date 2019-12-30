import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-background-video',
  templateUrl: './background-video.component.html',
  styleUrls: ['./background-video.component.scss']
})
export class BackgroundVideoComponent implements OnInit {

  @Input() file: string;

  constructor() { }

  ngOnInit() {
  }

}
