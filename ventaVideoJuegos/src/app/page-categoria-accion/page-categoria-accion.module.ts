import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageCategoriaAccionPageRoutingModule } from './page-categoria-accion-routing.module';

import { PageCategoriaAccionPage } from './page-categoria-accion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageCategoriaAccionPageRoutingModule
  ],
  declarations: [PageCategoriaAccionPage]
})
export class PageCategoriaAccionPageModule {}
