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

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';
import { EsriMapService } from '../services/esri-map.service';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {

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
        'esri/views/SceneView',
        'esri/layers/SceneLayer',
    ])
      .then(([WebScene, SceneView, SceneLayer]) => {
        const scene = new WebScene({
          basemap: 'satellite',
          ground: 'world-elevation',
          portalItem: {
            id: 'ece859ba1e0a4668940c5f10bb3fe4e3'
          }
        });

        this.sceneView = new SceneView({
          container: this.viewNode.nativeElement,
          zoom: 9,
          map: scene,
          center: [10.659398, 63.919525]
        });

        // Create SceneLayer and add to the map
        let sceneLayer = new SceneLayer({
              portalItem: {
                  id: '0cb2a926f28b47a09a90d1845e2937c0'
              },
              popupEnabled: false
          });
        scene.add(sceneLayer);

        sceneLayer = new SceneLayer({
              portalItem: {
                  id: '72b449d8a22448d2ac93f49dbd687804'
              },
              popupEnabled: false
          });
        scene.add(sceneLayer);

        sceneLayer = new SceneLayer({
              portalItem: {
                  id: '70f6bf1b1cda437ea413dc86d2bc4703'
              },
              popupEnabled: false
          });
        scene.add(sceneLayer);

        // Create MeshSymbol3D for symbolizing SceneLayer
        const symbol = {
          type: 'mesh-3d', // autocasts as new MeshSymbol3D()
            symbolLayers: [
              {
                type: 'fill', // autocasts as new FillSymbol3DLayer()
                  // If the value of material is not assigned, the default color will be grey
                  material: {
                    color: [244, 247, 134]
                  }
              }
            ]
          };
        // Add the renderer to sceneLayer
        sceneLayer.renderer = {
          type: 'simple', // autocasts as new SimpleRenderer()
            symbol: symbol
        };

        // It's necessary to overwrite the default click for the popup behavior in order to display your own popup
        this.sceneView.popup.autoOpenEnabled = false;

        this.sceneView.when(() => { // all the resources in the mapbiew and the map have loaded
          // this.mapService.panToDestination(0);
        }, (err) => console.log(err));

        const myView = this.sceneView

        //if a feature was clicked, print its id within its layer
        myView.on('pointer-down', function(event) {
          myView.hitTest(event).then(function(response) {
            if (response) {
              console.log('map click')
              const myPath = response.results[0].graphic.layer.parsedUrl.path
              const splitPath = myPath.split('/')
              console.log(splitPath[splitPath.length - 1])
            }
          });
        });

      }).catch(err => {
        console.log(err);
      });
  }

}
