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
  destinationPosition;

  destinations = [
    {id: 0, name: 'Strafgefangenenlager Falstad',   position: {latitude: 63.68929569223207, longitude: 11.035968872768855, z: 122.86971442960203}, heading: 49.007836679324285, tilt: 66.68518842115758, zoom: 18},
    {id: 1, name: 'Dora, ubåtbunker',               position: {latitude: 63.44396886756406, longitude: 10.42104052312348, z: 268.8250433485955}, heading: 174.42516383966532, tilt: 59.71439944826535, zoom: 18},
    {id: 2, name: 'Austrått fort',                  position: {latitude: 63.70931396085764, longitude: 9.711146899323365, z: 110.1026583276689}, heading: 102.70529673533983, tilt: 82.73763903128187, zoom: 18},
    {id: 3, name: 'Skatval krigshistoriske museum', position: {latitude: 63.54791555970363, longitude: 10.837491647793206, z: 307.8825095668435}, heading: 188.43130246821258, tilt: 70.18149023768319, zoom: 18},
    {id: 4, name: 'Tirpitz',                        position: {latitude: 63.55520988144179, longitude: 10.930176664058006, z: 199.50864784419537}, heading: 21.225734678617805, tilt: 78.50222563040889, zoom: 18}
  ];


  panToDestination(index) {
    this.currentAutoDestinationIndex = index
    this.destinationPosition = this.destinations[this.currentAutoDestinationIndex].position;
    this.panRequest.next();
  }

  panToDestinationComplete() {
    this.currentAutoDestinationIndex = (this.currentAutoDestinationIndex  + 1) % this.destinations.length
    this.destinationPosition = this.destinations[this.currentAutoDestinationIndex].position;
    //this.panComplete.next();
  }

  constructor() { }
}
