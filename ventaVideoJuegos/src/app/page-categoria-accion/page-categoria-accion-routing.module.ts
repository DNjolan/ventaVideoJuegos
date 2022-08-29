import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageCategoriaAccionPage } from './page-categoria-accion.page';

const routes: Routes = [
  {
    path: '',
    component: PageCategoriaAccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageCategoriaAccionPageRoutingModule {}
