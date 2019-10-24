import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { APP_ROUTING } from "./app.routes";

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component'
import { BiografiaComponent } from './componentes/biografia/biografia.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { VideoGaleriaComponent } from './componentes/video-galeria/video-galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BiografiaComponent,
    GaleriaComponent,
    NavbarComponent,
    VideoGaleriaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
