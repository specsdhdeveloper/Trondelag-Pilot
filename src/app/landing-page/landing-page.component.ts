import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [NgbCarouselConfig]
})
export class LandingPageComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 100000;
    config.wrap = true;
  }

  ngOnInit() {
  }

}
