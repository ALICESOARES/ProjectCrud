import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil.component';
import { EditComponent } from './edit/edit.component';




const routes: Routes = [
  { path: '', component: PerfilComponent },
  { path: ':id', component: EditComponent },
  { path: 'new', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
