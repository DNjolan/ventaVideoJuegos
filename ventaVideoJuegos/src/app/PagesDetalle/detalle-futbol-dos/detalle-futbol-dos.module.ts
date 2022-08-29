import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleFutbolDosPageRoutingModule } from './detalle-futbol-dos-routing.module';

import { DetalleFutbolDosPage } from './detalle-futbol-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleFutbolDosPageRoutingModule
  ],
  declarations: [DetalleFutbolDosPage]
})
export class DetalleFutbolDosPageModule {}
