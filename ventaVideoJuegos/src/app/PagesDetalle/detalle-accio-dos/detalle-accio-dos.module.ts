import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAccioDosPageRoutingModule } from './detalle-accio-dos-routing.module';

import { DetalleAccioDosPage } from './detalle-accio-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAccioDosPageRoutingModule
  ],
  declarations: [DetalleAccioDosPage]
})
export class DetalleAccioDosPageModule {}
