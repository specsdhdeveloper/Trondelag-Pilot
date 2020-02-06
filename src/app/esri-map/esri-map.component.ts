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

  //buildings =    [  '70f6bf1b1cda437ea413dc86d2bc4703',
    //                '72b449d8a22448d2ac93f49dbd687804',
    //                'a530f31f08c34be9acbe621e34233887',
    //               '87e69ddcdd0f4b44bd6dc7edfbffaffc',
    //                'cc3b9ebc17f549b8b5eb0e916a9484ab',
    //                '0cb2a926f28b47a09a90d1845e2937c0'  ]

  buildings =    [  'd055f56b08144e9597ddd49b654cdcd4', //Dora
                    '258ad2daa69c4c1390412c464b3a13b2', //Skatval
                    '2437a909678f447ab9769ba58b36efb3', //Austratt fort
                    '9f13157ae65a43b58377a9baf975dade', //Falstad -
                    '1b3e8a35a028442993804c73a0123f3c', //Tirpitz
                    '956c8648214f494db6cb6a664ccf8bb7' ]//Austratt manor house  ]
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
    this.sceneView.goTo(viewpoint, {speedFactor: 0.5})
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

    /** use esri-loader to load JSAPI modules
     * We enumerate the modules one by one in the loadModules block, and instantiate the types just loaded in the
     * 'then' block. Once we are done with initialization this all gets injected in the 'viewNode' DOM element
     */

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
            id: '6e35da2feaf542da97d0c7e8a8395a8e' // we get this ID from the webscene Milad exports
            //id: 'd1e51be1a662448dbb56e8c0fa5904a2' // we get this ID from the webscene Milad exports
          }
        });

        this.sceneView = new SceneView({
          container: this.viewNode.nativeElement,
          zoom: 9,
          map: scene,
          center: [10.659398, 63.919525]
        });

        // Create SceneLayer and add to the map. We are using scene layers to load 3D buildings because ArcGIS wouldn't let us do otherwise
        // Each one of these IDs correspond to a 3D layer, that contains one building

        let sceneLayer = new SceneLayer()

        this.buildings.forEach(value => {
          sceneLayer = new SceneLayer({
            portalItem: {
              id: value
            },
            popupEnabled: false
          });
          scene.add(sceneLayer);
        })

        // Create MeshSymbol3D for symbolizing SceneLayer
        // This is necessary to display the 3D models. it adds a renderer to the scene
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
        // this.sceneView.popup.autoOpenEnabled = false;

        this.sceneView.when(() => { // all the resources in the mapbiew and the map have loaded
          // this.mapService.panToDestination(0);
        }, (err) => console.log(err));

        const myView = this.sceneView

        // if a feature was clicked, print its id within its layer
        myView.on('pointer-down', function(event) {
          myView.hitTest(event).then(function(response) {
            if (response) {
              console.log('map click')
              // this is how you get the feature ID to link it to our content
              /*const myPath = response.results[0].graphic.layer.parsedUrl.path
              const splitPath = myPath.split('/')
              console.log(splitPath[splitPath.length - 1])*/
            }
          });
        });

      }).catch(err => {
        console.log(err);
      });
  }

}
