import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from '../perfil/perfil.component';
import { PerfilRoutingModule } from './perfil-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    FormsModule

  ],

  exports:[
  PerfilComponent,
  CommonModule
  ]
})
export class PerfilModule { }
