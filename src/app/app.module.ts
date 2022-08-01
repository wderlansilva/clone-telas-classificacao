import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './principal/principal.component';
import { EditarComponent } from './editar/editar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { DialogsucessComponent } from './dialogs/dialogsucess/dialogsucess.component';
import { DialogerrorComponent } from './dialogs/dialogerror/dialogerror.component';
import { DialogsSuccessEditComponent } from './dialogs/dialogs-success-edit/dialogs-success-edit.component';
import { DialogsErroEditComponent } from './dialogs/dialogs-erro-edit/dialogs-erro-edit.component';
import { DialogSaveAndExitComponent } from './dialogs/dialog-save-and-exit/dialog-save-and-exit.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    EditarComponent,
    CadastroComponent,
    MenuComponent,
    DialogsucessComponent,
    DialogerrorComponent,
    DialogsSuccessEditComponent,
    DialogsErroEditComponent,
    DialogSaveAndExitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
