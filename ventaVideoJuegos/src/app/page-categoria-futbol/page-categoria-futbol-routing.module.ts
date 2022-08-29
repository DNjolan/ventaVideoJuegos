import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageCategoriaFutbolPage } from './page-categoria-futbol.page';

const routes: Routes = [
  {
    path: '',
    component: PageCategoriaFutbolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageCategoriaFutbolPageRoutingModule {}
