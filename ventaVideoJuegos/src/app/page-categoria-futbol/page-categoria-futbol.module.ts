import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageCategoriaFutbolPageRoutingModule } from './page-categoria-futbol-routing.module';

import { PageCategoriaFutbolPage } from './page-categoria-futbol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageCategoriaFutbolPageRoutingModule
  ],
  declarations: [PageCategoriaFutbolPage]
})
export class PageCategoriaFutbolPageModule {}
