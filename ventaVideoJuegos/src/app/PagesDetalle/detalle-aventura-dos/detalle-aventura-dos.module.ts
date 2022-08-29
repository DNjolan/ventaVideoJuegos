import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAventuraDosPageRoutingModule } from './detalle-aventura-dos-routing.module';

import { DetalleAventuraDosPage } from './detalle-aventura-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAventuraDosPageRoutingModule
  ],
  declarations: [DetalleAventuraDosPage]
})
export class DetalleAventuraDosPageModule {}
