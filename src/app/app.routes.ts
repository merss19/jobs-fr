import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AuthComponent } from './auth';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: '**',    component: NoContentComponent },
];
