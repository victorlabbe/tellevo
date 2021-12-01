import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { ComponenteUnoComponent } from 'src/app/components/componente-uno/componente-uno.component';
import { ComponenteDosComponent } from 'src/app/components/componente-dos/componente-dos.component';
import { ComponenteTresComponent } from 'src/app/components/componente-tres/componente-tres.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule
  ],
  declarations: [MainPage, ComponenteUnoComponent, ComponenteDosComponent, ComponenteTresComponent]
})
export class MainPageModule {}
