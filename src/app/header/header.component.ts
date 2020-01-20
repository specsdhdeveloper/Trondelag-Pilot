/*
  Copyright 2019 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
import { Component, OnInit } from '@angular/core';
import {SpreadsheetService} from '../services/spreadsheet.service';
import {ActivatedRoute, Router} from '@angular/router';
import { HostListener } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class HeaderComponent implements OnInit {

  header = 'Async Operations Using RxJS Observables';
  header_tag = 'Select a world wonder.  The selector is then disabled while the map pans to your selection. ' +
               ' Once complete, the map component notifies the service.  The service in turn then notifies ' +
               'all subscribed observers that the map is finished panning.';

  destinations : any;
  activities : any;

  constructor(private spreadSheetJSONServiceVariable: SpreadsheetService, private route: ActivatedRoute, public router: Router) {
    }

  selectDropDown()
  {
    console.log("entra");
  }

  /*selectDropDown(id : any, routeName : any)
  {
    console.log("entra");
    this.router.navigate(['/' + routeName + '/' + id]);
  }*/

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    
      let element = document.querySelector('.navbar');
      //console.log("element.clientHeight " + element.clientHeight);
      //console.log("window.pageYOffset " + window.pageYOffset);
      if (window.pageYOffset < 350) {
        element.classList.add('navbar-transparent');
      } else {
        element.classList.remove('navbar-transparent');
      }
    }

  ngOnInit() {

    this.destinations = this.spreadSheetJSONServiceVariable.DBDestination;
    console.log(this.destinations);
    this.activities = this.spreadSheetJSONServiceVariable.DBActivity;
  }

}
