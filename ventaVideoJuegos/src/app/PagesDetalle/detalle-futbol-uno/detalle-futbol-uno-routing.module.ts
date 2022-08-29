import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleFutbolUnoPage } from './detalle-futbol-uno.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleFutbolUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleFutbolUnoPageRoutingModule {}
