import { CadastroComponent } from './cadastro/cadastro.component';
import { PrincipalComponent } from './principal/principal.component';
import { EditarComponent } from './editar/editar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '' , component: PrincipalComponent},
  {path: 'cadastro' , component: CadastroComponent},
  {path: 'editar/:id' , component: EditarComponent},
  {path: 'principal' , component: PrincipalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
