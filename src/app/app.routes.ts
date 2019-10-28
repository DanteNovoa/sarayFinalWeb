import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./componentes/home/home.component";
import { VideoGaleriaComponent } from "./componentes/video-galeria/video-galeria.component";
import { ContactoComponent } from "./shared/contacto/contacto.component";
import { BiografiaComponent } from "./componentes/biografia/biografia.component";
import { GaleriaComponent } from "./componentes/galeria/galeria.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'biografia', component: BiografiaComponent },
    { path: 'peleas', component: VideoGaleriaComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)