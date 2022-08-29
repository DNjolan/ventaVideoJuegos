import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleFutbolTresPage } from './detalle-futbol-tres.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleFutbolTresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleFutbolTresPageRoutingModule {}
