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

import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { PresentationModule } from './presentation/presentation.module';

import { EsriMapComponent } from './components/esri-map/esri-map.component';
import { EsriMapService } from './services/esri-map.service';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        EsriMapComponent,
        HeaderComponent,
        DashboardComponent,
        ControlPanelComponent
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
        ExamplesModule
    ],
    providers: [EsriMapService],
    bootstrap: [AppComponent]
})
export class AppModule { }
