import {Routes} from '@angular/router';
import {ContactComponent} from './pages/contact/contact.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {HomeComponent} from './pages/home/home.component';
import {AboutMeComponent} from './pages/about-me/about-me.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'contact-me',
    component: ContactComponent,
  },
];
