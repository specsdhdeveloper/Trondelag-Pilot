import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { Observable, Subscription, forkJoin  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-landinghome-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class LandingPageComponent implements OnInit {

  constructor(private spreadSheetServiceVariable: SpreadsheetService, private route: ActivatedRoute, private http: HttpClient) {

  }

  /*loadVideo(url) {
    return new Promise((resolve, reject) => { // here we download it entirely
        let request = new XMLHttpRequest();
        request.responseType = 'blob';
        request.onload = (evt)=>resolve(request.response);
        request.onerror = reject;
        request.open('GET', url);
        request.send();
      }).then((blob)=> 
          new Promise((resolve, reject)=>{
              resolve(URL.createObjectURL(blob)); // return the blobURL directly
              })
          );
  
  }*/

  loadVideo(url) {
    return fetch(url)
      .then(resp => resp.blob())
      .then(blob => URL.createObjectURL(blob));
  }

  ngOnInit() {
    //"https://specs.owncube.com/index.php/s/dCM64UvY79Fj1vr/download?path=%2F&files=Overview-cropped_h264-800p.mp4"
    this.route.data.subscribe((data:any) => console.log(data));
    window.scrollTo(0, 0);


    
    this.loadVideo('https://specs.owncube.com/index.php/s/dCM64UvY79Fj1vr/download?path=%2F&files=Overview-cropped_h264-800p.mp4')
      .then(blobUrl => { // now it's loaded
      console.log('entra');
        document.body.className = 'loaded';
        let vid = document.querySelector('video');
        vid.src = blobUrl; // we just set our mediaElement's src to this blobURL
        vid.onload = () => URL.revokeObjectURL(blobUrl);
      }).catch((err) => console.log(err));
  }

}
