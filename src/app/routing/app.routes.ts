import { Route } from '@angular/router';
import { HomeComponent } from '../modules/general/components/home/home.component';
import { NotFoundComponent } from '../modules/general/components/not-found/not-found.component';

export const AppRoutes: Route[] = [
  {
    path: 'notfound',
    component : NotFoundComponent
  }
  ,
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '/notfound'
  },
];
