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

  printViewpoint() {

    const camera = this.sceneView.viewpoint.camera
    console.log({position :
          { latitude:  camera.position.latitude,
            longitude: camera.position.longitude,
            z:         camera.position.z
          },
          heading: camera.heading,
          tilt:    camera.tilt
    })
  }

  panMap(viewpoint) {
    console.log('panning')
    this.sceneView.goTo(viewpoint, {speedFactor: 0.1})
    .then(() => {
      this.mapService.panToDestinationComplete();
    });
  }

  public ngOnInit() {

    this.panRequestSubscription = this.mapService.panRequest.subscribe(() => {
      this.panMap(this.mapService.destinationPosition);
    });

    this.panCompleteSubscription = this.mapService.panComplete.subscribe(() => {
      this.panMap(this.mapService.destinationPosition);
    })

    // use esri-loader to load JSAPI modules
    return loadModules([
      'esri/WebScene',
      'esri/views/SceneView'
    ])
      .then(([WebScene, SceneView]) => {
        const scene = new WebScene({
          portalItem: {
            id: 'd303baeccc274ed788a439a9c2248255'
          },
        });

        this.sceneView = new SceneView({
          container: this.viewNode.nativeElement,
          zoom: 9,
          map: scene,
          center: [10.659398, 63.919525]
        });

        this.sceneView.when(() => { // all the resources in the mapbiew and the map have loaded
          // this.mapService.panToDestination(0);
        }, (err) => console.log(err));

      })
        .catch(err => {
        console.log(err);
      });

  }

  ngAfterViewInit() {

  }

}
