import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAccionUnoPageRoutingModule } from './detalle-accion-uno-routing.module';

import { DetalleAccionUnoPage } from './detalle-accion-uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAccionUnoPageRoutingModule
  ],
  declarations: [DetalleAccionUnoPage]
})
export class DetalleAccionUnoPageModule {}
