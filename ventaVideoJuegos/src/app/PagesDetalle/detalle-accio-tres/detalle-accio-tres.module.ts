import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAccioTresPageRoutingModule } from './detalle-accio-tres-routing.module';

import { DetalleAccioTresPage } from './detalle-accio-tres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAccioTresPageRoutingModule
  ],
  declarations: [DetalleAccioTresPage]
})
export class DetalleAccioTresPageModule {}
