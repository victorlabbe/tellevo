import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductorPageRoutingModule } from './conductor-routing.module';

import { ConductorPage } from './conductor.page';
import { ComponenteCincoComponent } from '../../components/componente-cinco/componente-cinco.component';
import { ComponenteCuatroComponent } from '../../components/componente-cuatro/componente-cuatro.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ConductorPageRoutingModule],
  declarations: [ConductorPage, ComponenteCuatroComponent],
})
export class ConductorPageModule {}
