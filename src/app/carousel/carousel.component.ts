import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-landing-page',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})

export class CarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig, route: ActivatedRoute) {
    config.interval = 100000;
    config.wrap = true;
  }

  ngOnInit() {
  }

}
