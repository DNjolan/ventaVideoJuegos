import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAventuraUnoPageRoutingModule } from './detalle-aventura-uno-routing.module';

import { DetalleAventuraUnoPage } from './detalle-aventura-uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAventuraUnoPageRoutingModule
  ],
  declarations: [DetalleAventuraUnoPage]
})
export class DetalleAventuraUnoPageModule {}
