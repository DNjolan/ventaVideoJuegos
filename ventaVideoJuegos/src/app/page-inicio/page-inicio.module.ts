import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageInicioPageRoutingModule } from './page-inicio-routing.module';

import { PageInicioPage } from './page-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageInicioPageRoutingModule
  ],
  declarations: [PageInicioPage]
})
export class PageInicioPageModule {}
