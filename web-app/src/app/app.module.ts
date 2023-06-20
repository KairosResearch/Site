import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnalisisCardComponent } from './analisis-card/analisis-card.component';
import { AnalisisComponent } from './analisis/analisis.component';
import { PartnersComponent } from './partners/partners.component';
import { PartnersDetailComponent } from './partners-detail/partners-detail.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { TeamComponent } from './team/team.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnalisisCardComponent,
    AnalisisComponent,
    PartnersComponent,
    PartnersDetailComponent,
    RoadmapComponent,
    TeamComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
