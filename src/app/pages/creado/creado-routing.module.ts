import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreadoPage } from './creado.page';

const routes: Routes = [
  {
    path: '',
    component: CreadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreadoPageRoutingModule {}
