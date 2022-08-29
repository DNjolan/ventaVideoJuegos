import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleFutbolTresPageRoutingModule } from './detalle-futbol-tres-routing.module';

import { DetalleFutbolTresPage } from './detalle-futbol-tres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleFutbolTresPageRoutingModule
  ],
  declarations: [DetalleFutbolTresPage]
})
export class DetalleFutbolTresPageModule {}
