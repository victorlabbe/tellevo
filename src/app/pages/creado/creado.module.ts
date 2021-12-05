import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreadoPageRoutingModule } from './creado-routing.module';

import { CreadoPage } from './creado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreadoPageRoutingModule
  ],
  declarations: [CreadoPage]
})
export class CreadoPageModule {}
