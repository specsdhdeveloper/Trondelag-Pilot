import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { ActivatedRoute } from "@angular/router";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-destination-PrincipalPage',
  templateUrl: './destination-PrincipalPage.component.html',
  styleUrls: ['./destination-PrincipalPage.component.scss']
})
export class DestinationPrincipalPage implements OnInit {

  tableDestination : Array<any> = [];
  tableBlock1 : Array<any> = [];
  tableBlock2 : Array<any> = [];
  tableBlock3 : Array<any> = [];

  constructor(private spreadSheetServiceVariable: SpreadsheetService, private route: ActivatedRoute, public breakpointObserver: BreakpointObserver) {

  }

  ngOnInit() {

    window.scrollTo(0, 0);

    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
       // handle XSmall breakpoint
       console.log('Breakpoints.XSmall');
      }
      if (result.breakpoints[Breakpoints.Small]) {
       // handle Small breakpoint
       console.log('Breakpoints.Small');
      }
      if (result.breakpoints[Breakpoints.Medium]) {
      // handle Medium breakpoint
      console.log('Breakpoints.Medium');
      }
      if (result.breakpoints[Breakpoints.Large]) {
        // handle Large breakpoint
        console.log('Breakpoints.Large');
      }
      if (result.breakpoints[Breakpoints.XLarge]) {
        // handle XLarge breakpoint
        console.log('Breakpoints.XLarge');
      }
    });
  }

}