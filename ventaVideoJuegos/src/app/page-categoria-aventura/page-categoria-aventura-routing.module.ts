import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageCategoriaAventuraPage } from './page-categoria-aventura.page';

const routes: Routes = [
  {
    path: '',
    component: PageCategoriaAventuraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageCategoriaAventuraPageRoutingModule {}
