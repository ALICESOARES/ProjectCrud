import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from '../perfil/perfil.component';
import { PerfilRoutingModule } from './perfil-routing.module';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [PerfilComponent, EditComponent],
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
