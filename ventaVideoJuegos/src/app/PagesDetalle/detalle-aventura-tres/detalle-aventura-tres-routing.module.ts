import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAventuraTresPage } from './detalle-aventura-tres.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAventuraTresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleAventuraTresPageRoutingModule {}
