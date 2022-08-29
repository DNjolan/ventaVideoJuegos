import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageCategoriaAventuraPageRoutingModule } from './page-categoria-aventura-routing.module';

import { PageCategoriaAventuraPage } from './page-categoria-aventura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageCategoriaAventuraPageRoutingModule
  ],
  declarations: [PageCategoriaAventuraPage]
})
export class PageCategoriaAventuraPageModule {}
