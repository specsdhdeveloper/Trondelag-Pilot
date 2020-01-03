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
import { SpreadsheetService } from '../HomePage/spreadsheet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit, AfterViewInit {

  @ViewChild('mapViewNode') private viewNode: ElementRef; // needed to inject the MapView into the DOM
  mapView: __esri.MapView;
  panRequestSubscription: any;

  row: any;

  constructor(private mapService: EsriMapService,
              private spreadSheetJSONServiceVariable: SpreadsheetService,
              private route: ActivatedRoute) {}

  panMap(coordinates){
    console.log("panning to " + coordinates)
    this.mapView.goTo(coordinates)
    .then(() => {
      this.mapView.zoom = 18;
      setTimeout(() => {
        this.mapService.panToDestinationComplete();
      }, 2000);
    });
  }

  public ngOnInit() {
    this.row = this.spreadSheetJSONServiceVariable.GetRowByID(this.route.snapshot.paramMap.get('id'));

    this.panRequestSubscription = this.mapService.panRequest.subscribe(() => {
      this.panMap(this.mapService.destinationCoordinates);
    });

    // use esri-loader to load JSAPI modules
    return loadModules([
      'esri/Map',
      'esri/views/SceneView',
      'esri/Graphic'
    ])
      .then(([Map, MapView, Graphic]) => {
        const map: __esri.Map = new Map({
          basemap: 'hybrid',
          ground: "world-elevation"
        });

        this.mapView = new MapView({
          container: this.viewNode.nativeElement,
          //TODO use regexp instead of calling replace twice
          center: [ Number(this.row.longi.replace('"', '').replace('"', '') ),
                    Number(this.row.latitud.replace('"', '').replace('"', '') )],
          zoom: 18,
          map: map
        });

      })
        .catch(err => {
        console.log(err);
      });

  }

  ngAfterViewInit() {

  }

}
