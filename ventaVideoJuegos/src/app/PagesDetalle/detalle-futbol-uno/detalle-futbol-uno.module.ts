import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleFutbolUnoPageRoutingModule } from './detalle-futbol-uno-routing.module';

import { DetalleFutbolUnoPage } from './detalle-futbol-uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleFutbolUnoPageRoutingModule
  ],
  declarations: [DetalleFutbolUnoPage]
})
export class DetalleFutbolUnoPageModule {}
