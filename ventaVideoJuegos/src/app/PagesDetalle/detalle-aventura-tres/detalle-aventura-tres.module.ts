import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAventuraTresPageRoutingModule } from './detalle-aventura-tres-routing.module';

import { DetalleAventuraTresPage } from './detalle-aventura-tres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAventuraTresPageRoutingModule
  ],
  declarations: [DetalleAventuraTresPage]
})
export class DetalleAventuraTresPageModule {}
