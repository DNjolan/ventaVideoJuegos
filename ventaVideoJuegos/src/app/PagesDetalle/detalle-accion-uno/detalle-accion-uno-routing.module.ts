import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAccionUnoPage } from './detalle-accion-uno.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAccionUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleAccionUnoPageRoutingModule {}
