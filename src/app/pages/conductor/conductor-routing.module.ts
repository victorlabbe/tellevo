import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteCincoComponent } from 'src/app/components/componente-cinco/componente-cinco.component';
import { ComponenteCuatroComponent } from 'src/app/components/componente-cuatro/componente-cuatro.component';

import { ConductorPage } from './conductor.page';

const routes: Routes = [
  {
    path: '',
    component: ConductorPage,
    
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConductorPageRoutingModule {}
