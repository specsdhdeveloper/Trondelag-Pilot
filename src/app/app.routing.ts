import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { PresentationComponent } from './presentation/presentation.component';
import { ComponentsComponent } from './components/components.component';
import { SectionsComponent } from './sections/sections.component';
import { AboutusComponent } from './examples/aboutus/aboutus.component';
import { BlogpostComponent } from './examples/blogpost/blogpost.component';
import { BlogpostsComponent } from './examples/blogposts/blogposts.component';
import { ContactusComponent } from './examples/contactus/contactus.component';
import { EcommerceComponent } from './examples/ecommerce/ecommerce.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProductpageComponent } from './examples/productpage/productpage.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { RegisterComponent } from './examples/register/register.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { PricingComponent } from './examples/pricing/pricing.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { SpreadsheetResolver } from './resolveComponents/spreadsheet.resolve';
import { DestinationPageComponent } from './destination-page/destination-page.component';
import { StoryPageComponent } from './story-page/story-page.component';
import { ActivityPageComponent } from './activity-page/activity-page.component';
import { DestinationPrincipalPage } from './destination-PrincipalPage/destination-PrincipalPage.component';
import { StoryPrincipalPage } from './story-PrincipalPage/story-PrincipalPage.component';
import { ActivityPrincipalPage } from './activity-PrincipalPage/activity-PrincipalPage.component';
import {EsriMapComponent} from './esri-map/esri-map.component';
import {ModelViewerComponent} from './model-viewer/model-viewer.component';

const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full'},
    { path: 'map',                  component: EsriMapComponent,                resolve: { esriMap : SpreadsheetResolver}},
    { path: 'model/:id',            component: ModelViewerComponent,            resolve: { modelViewer : SpreadsheetResolver}},
    { path: 'destinations',         component: DestinationPrincipalPage,        resolve: { principalDestination : SpreadsheetResolver}},
    { path: 'destination/:id',      component: DestinationPageComponent,        resolve: { destinations : SpreadsheetResolver}},
    { path: 'stories',              component: StoryPrincipalPage,              resolve: { principalStory : SpreadsheetResolver}},
    { path: 'story/:id',            component: StoryPageComponent,              resolve: { story : SpreadsheetResolver}},
    { path: 'activities',           component: ActivityPrincipalPage,           resolve: { principalActivity : SpreadsheetResolver}},
    { path: 'activity/:id',         component: ActivityPageComponent,           resolve: { activity : SpreadsheetResolver}},
    { path: 'landing',              component: LandingPageComponent,            resolve: { landing : SpreadsheetResolver}},
    { path: 'presentation',         component: PresentationComponent },
    { path: 'components',           component: ComponentsComponent },
    { path: 'sections',             component: SectionsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/aboutus',     component: AboutusComponent },
    { path: 'examples/blogpost',    component: BlogpostComponent },
    { path: 'examples/blogposts',   component: BlogpostsComponent },
    { path: 'examples/contactus',   component: ContactusComponent },
    { path: 'examples/ecommerce',   component: EcommerceComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/pricing',     component: PricingComponent },
    { path: 'examples/productpage', component: ProductpageComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'examples/register',    component: RegisterComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
          useHash: true,
          onSameUrlNavigation : 'reload'
        })
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
