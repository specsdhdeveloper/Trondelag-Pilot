import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  styles: [`
    .hero  {
        background-image: url() !important;
        background-size: cover;
        background-position: center center;
    }
  `]

})


export class AppComponent {
  title = 'app';
}
