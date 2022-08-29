import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleFutbolDosPage } from './detalle-futbol-dos.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleFutbolDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleFutbolDosPageRoutingModule {}
