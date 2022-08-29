import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAccioDosPage } from './detalle-accio-dos.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAccioDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleAccioDosPageRoutingModule {}
