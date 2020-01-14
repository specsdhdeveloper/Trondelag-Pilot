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

import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';
import { EsriMapService } from '../services/esri-map.service';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit, AfterViewInit {

  @ViewChild('sceneViewNode') private viewNode: ElementRef; // needed to inject the MapView into the DOM
  sceneView: __esri.SceneView;
  panRequestSubscription: any;
  panCompleteSubscription: any;

  row: any;

  constructor(private mapService: EsriMapService,
              private spreadSheetJSONServiceVariable: SpreadsheetService,
              private route: ActivatedRoute) {}

  panMap(coordinates) {
    console.log('panning to ' + coordinates)
    this.sceneView.goTo({center: coordinates, heading: Math.random() * 360, tilt: 75, zoom: 18}, {speedFactor: 0.1} )
    .then(() => {
      this.mapService.panToDestinationComplete();
    });
  }

  public ngOnInit() {

    this.panRequestSubscription = this.mapService.panRequest.subscribe(() => {
      this.panMap(this.mapService.destinationCoordinates);
    });

    this.panCompleteSubscription = this.mapService.panComplete.subscribe(() => {
      this.panMap(this.mapService.destinationCoordinates);
    })

    // use esri-loader to load JSAPI modules
    return loadModules([
      'esri/Map',
      'esri/views/SceneView',
      'esri/Graphic'
    ])
      .then(([Map, SceneView, Graphic]) => {
        const map: __esri.Map = new Map({
          basemap: 'satellite',
          ground: 'world-elevation'
        });

        this.sceneView = new SceneView({
          container: this.viewNode.nativeElement,
          zoom: 18,
          map: map
        });

        this.sceneView.when(() => { // all the resources in the mapbiew and the map have loaded
          this.mapService.panToDestination(0);
        }, (err) => console.log(err));

      })
        .catch(err => {
        console.log(err);
      });

  }

  ngAfterViewInit() {

  }

}
