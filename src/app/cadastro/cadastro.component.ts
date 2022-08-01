import { DialogSaveAndExitComponent } from './../dialogs/dialog-save-and-exit/dialog-save-and-exit.component';
import { DialogsucessComponent } from './../dialogs/dialogsucess/dialogsucess.component';
import { ClassificacaoService } from './../principal/services/classificacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogerrorComponent } from '../dialogs/dialogerror/dialogerror.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  submit: boolean = false;

  constructor(private fb: FormBuilder, private service: ClassificacaoService,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      protocolo: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      corDeReferencia: [null, [Validators.minLength(3), Validators.maxLength(100)]],
      descricao: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      sigla: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      tempoAtivo: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      atServicoSocial: [null, [Validators.minLength(3), Validators.maxLength(20)]],
      recomendacao: [null, [Validators.minLength(3), Validators.maxLength(20)]],

      situacaoIncompativel: [null, [Validators.minLength(3), Validators.maxLength(20)]],
      escoreMinino: [null, [Validators.minLength(3), Validators.maxLength(20)]],
      escoreMaximo: [null, [Validators.minLength(3), Validators.maxLength(20)]],
      tempoAlvo: [null, [Validators.minLength(3), Validators.maxLength(20)]],
      prioridadeSemClassificao: [null, [Validators.minLength(3), Validators.maxLength(20)]],
    });
  }

  form!: FormGroup;

  hasError(campo: string){
    return this.form.get(campo)?.errors;
  }


  onSubmit(){
    if(this.form.valid){
      this.service.create(this.form.value).subscribe();
      this.dialog.open(DialogsucessComponent);
      this.form.reset();
    } else {
      this.submit = true;
      this.dialog.open(DialogerrorComponent);
    }
  }

  saveAndBack(){
    if(this.form.valid){
      this.service.create(this.form.value).subscribe();
      this.dialog.open(DialogSaveAndExitComponent);
      this.form.reset();
    } else {
      this.submit = true;
      this.dialog.open(DialogerrorComponent);
    }
  }

  clearFormulario(){
    this.submit = false;
    this.form.reset();
  }


}

