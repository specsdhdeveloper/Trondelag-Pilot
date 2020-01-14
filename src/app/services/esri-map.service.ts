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
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EsriMapService {

  panRequest = new Subject<void>();
  panComplete = new Subject<void>();

  currentAutoDestinationIndex = 0;

  destinations = [
    {id: 0, name: 'Strafgefangenenlager Falstad', coordinates: [11.0415781, 63.6913426]},
    {id: 1, name: 'Dora, ubåtbunker', coordinates: [10.4215368, 63.4399374]},
    {id: 2, name: 'Austrått fort', coordinates: [9.7221092, 63.7084133]},
    {id: 3, name: 'Skatval krigshistoriske museum', coordinates: [10.8302098, 63.5399489]},
    {id: 4, name: 'Tirpitz', coordinates: [10.9361328, 63.5638626]}
  ];

  destinationCoordinates;

  panToDestination(index) {
    this.currentAutoDestinationIndex = index
    this.destinationCoordinates = this.destinations[this.currentAutoDestinationIndex].coordinates;
    this.panRequest.next();
  }

  panToDestinationComplete() {
    this.currentAutoDestinationIndex = (this.currentAutoDestinationIndex  + 1) % this.destinations.length
    this.destinationCoordinates = this.destinations[this.currentAutoDestinationIndex].coordinates;
    this.panComplete.next();
  }

  constructor() { }
}
