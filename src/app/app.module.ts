import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { PresentationModule } from './presentation/presentation.module';

import { EsriMapComponent } from './esri-map/esri-map.component';
import { EsriMapService } from './services/esri-map.service';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BackgroundVideoComponent } from './background-video/background-video.component';
import { ModelViewerComponent } from './model-viewer/model-viewer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePage } from './HomePage/homePage.component';
import { spreadSheetJSONService } from './HomePage/spreadSheetJSON.service';
import { classResolve } from './HomePage/spreadSheetJSON.resolve';
import { Destination } from './destinations/destination.component';
import { Story } from './Story/story.component';
import { Tour } from './Tour/tour.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        EsriMapComponent,
        HeaderComponent,
        DashboardComponent,
        ControlPanelComponent,
        CarouselComponent,
        BackgroundVideoComponent,
        ModelViewerComponent,
        LandingPageComponent,
        HomePage,
        Destination,
        Story,
        Tour
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        PresentationModule,
        SectionsModule,
        ComponentsModule,
        ExamplesModule,
        HttpClientModule
    ],
    providers: [EsriMapService, spreadSheetJSONService, classResolve],
    bootstrap: [AppComponent]
})
export class AppModule { }
