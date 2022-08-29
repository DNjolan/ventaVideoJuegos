import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAccioTresPage } from './detalle-accio-tres.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAccioTresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleAccioTresPageRoutingModule {}
