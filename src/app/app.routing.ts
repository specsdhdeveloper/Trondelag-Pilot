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

import {CarouselComponent} from './carousel/carousel.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import { classResolve } from './HomePage/spreadSheetJSON.resolve';
import { HomePage } from './HomePage/homePage.component';
import { DestinationComponent } from './destinations/destination.component';
import { StoryComponent } from './Story/story.component';
import { TourComponent } from './Tour/tour.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home',                 component: HomePage,                resolve: { homePage : classResolve}},
    { path: 'home/:id',             component: HomePage,                resolve: { homePage : classResolve}},
    { path: 'destination/:id',      component: DestinationComponent,             resolve: { destination : classResolve}},
    { path: 'story/:id',            component: StoryComponent,                   resolve: { story : classResolve}},
    { path: 'tour/:id',             component: TourComponent,                    resolve: { tour : classResolve}},
    { path: 'landing',              component: LandingPageComponent},
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
