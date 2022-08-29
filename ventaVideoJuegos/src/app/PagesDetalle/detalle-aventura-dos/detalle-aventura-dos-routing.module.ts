import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAventuraDosPage } from './detalle-aventura-dos.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAventuraDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleAventuraDosPageRoutingModule {}
