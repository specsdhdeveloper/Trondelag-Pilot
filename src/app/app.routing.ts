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
import { HomePage } from './HomePage/homePage.component';
import { DestinationPageComponent } from './destinations-page/destination-page.component';
import { StoryPageComponent } from './story-page/story-page.component';
import { ActivityPageComponent } from './activities-page/activity-page.component';
import { DestinationPrincipalPage } from './destinationPrincipalPage/destinationPrincipalPage.component';
import { StoryPrincipalPage } from './storyPrincipalPage/storyPrincipalPage.component';
import { ActivityPrincipalPage } from './activityPrincipalPage/activityPrincipalPage.component';

const routes: Routes =[
    { path: '', redirectTo: 'landing', pathMatch: 'full'},
    { path: 'home',                 component: HomePage,                        resolve: { homePage : SpreadsheetResolver}},
    { path: 'home/:id',             component: HomePage,                        resolve: { homePage : SpreadsheetResolver}},
    { path: 'destination',          component: DestinationPrincipalPage,        resolve: { principalDestination : SpreadsheetResolver}},
    { path: 'destination/:id',      component: DestinationPageComponent,        resolve: { destination : SpreadsheetResolver}},
    { path: 'story',                component: StoryPrincipalPage,              resolve: { principalStory : SpreadsheetResolver}},
    { path: 'story/:id',            component: StoryPageComponent,              resolve: { story : SpreadsheetResolver}},    
    { path: 'activity',             component: ActivityPrincipalPage,           resolve: { principalActivity : SpreadsheetResolver}},
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
        RouterModule.forRoot(routes,{
          useHash: true,
          onSameUrlNavigation : 'reload'
        })
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
