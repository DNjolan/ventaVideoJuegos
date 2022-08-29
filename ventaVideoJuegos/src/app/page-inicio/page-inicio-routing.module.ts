import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageInicioPage } from './page-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: PageInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageInicioPageRoutingModule {}
