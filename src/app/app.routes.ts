import { Routes } from '@angular/router'

import { NotFoundComponent } from './core/not-found/not-found.component'
import { NotPermissionComponent } from './core/not-permission/not-permission.component'


export const routes: Routes = [
  /*{
    path: "",
    component: HomeComponent,
  },*/
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '403',
    component: NotPermissionComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
]
