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
import { NavbarComponent } from './shared/navbar/navbar.component';

import { PresentationModule } from './presentation/presentation.module';

import { EsriMapComponent } from './esri-map/esri-map.component';
import { EsriMapService } from './services/esri-map.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { BackgroundVideoComponent } from './background-video/background-video.component';
import { ModelViewerComponent } from './model-viewer/model-viewer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SpreadsheetService } from './services/spreadsheet.service';
import { SpreadsheetResolver } from './resolveComponents/spreadsheet.resolve';
import { DestinationPageComponent } from './destinations-page/destination-page.component';
import { StoryPageComponent } from './story-page/story-page.component';
import { ActivityPageComponent } from './activities-page/activity-page.component';
import { DestinationComponentLandingPage } from './landing-page/destinationComponent/destinationComponent.component';
import { StoryComponentLandingPage } from './landing-page/storyComponent/storyComponent.component';
import { ActivityComponentLandingPage } from './landing-page/activityComponent/activityComponent.component';
import { SafePipe } from './safe.pipe';
import { CarouselComponent } from './carousel/carousel.component';

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
        DestinationPageComponent,
        StoryPageComponent,
        ActivityPageComponent,
        StoryComponentLandingPage,
        DestinationComponentLandingPage,
        ActivityComponentLandingPage,
        FooterComponent,
        SafePipe
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
    providers: [EsriMapService, SpreadsheetService, SpreadsheetResolver],
    bootstrap: [AppComponent]
})
export class AppModule { }
