import { DialogsErroEditComponent } from './../dialogs/dialogs-erro-edit/dialogs-erro-edit.component';
import { DialogsSuccessEditComponent } from './../dialogs/dialogs-success-edit/dialogs-success-edit.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClassificacaoService } from '../principal/services/classificacao.service';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {

  submit: boolean = false;

  hasError(campo: string){
    return this.form.get(campo)?.errors;
  }

  constructor(
    private fb: FormBuilder,
    private service: ClassificacaoService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap((id) => this.service.loadById(id))
      )
      .subscribe((classificacao) => this.updateClassificacao(classificacao));

    this.form = this.fb.group({
      id: [null],
      protocolo: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      corDeReferencia: [
        null,
        [Validators.minLength(3), Validators.maxLength(100)],
      ],
      descricao: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      sigla: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ],
      ],
      tempoAtivo: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      atServicoSocial: [
        null,
        [Validators.minLength(3), Validators.maxLength(20)],
      ],
      recomendacao: [null, [Validators.minLength(3), Validators.maxLength(20)]],

      situacaoIncompativel: [
        null,
        [Validators.minLength(3), Validators.maxLength(20)],
      ],
      escoreMinino: [null, [Validators.minLength(3), Validators.maxLength(20)]],
      escoreMaximo: [null, [Validators.minLength(3), Validators.maxLength(20)]],
      tempoAlvo: [null, [Validators.minLength(3), Validators.maxLength(20)]],
      prioridadeSemClassificao: [
        null,
        [Validators.minLength(3), Validators.maxLength(20)],
      ],
    });
  }

  form!: FormGroup;

  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('id valido');
      this.service.update(this.form.value).subscribe();
      this.dialog.open(DialogsSuccessEditComponent);
    } else {
      this.submit = true;
      console.log('invalido');
      this.dialog.open(DialogsErroEditComponent);
    }
  }

  updateClassificacao(classificacao: any) {
    this.form.patchValue({
      id: classificacao.id,
      protocolo: classificacao.protocolo,
      corDeReferencia: classificacao.corDeReferencia,
      descricao: classificacao.descricao,
      sigla: classificacao.sigla,
      recomendacao: classificacao.recomendacao,
      tempoAtivo: classificacao.tempoAtivo,
      atServicoSocial: classificacao.atServicoSocial,
      situacaoIncompativel: classificacao.situacaoIncompativel,
      escoreMinino: classificacao.escoreMinino,
      escoreMaximo: classificacao.escoreMaximo,
      tempoAlvo: classificacao.tempoAlvo,
      prioridadeSemClassificao: classificacao.prioridadeSemClassificao,
    });
  }

  clearFormulario(){
    this.form.reset();
  }
}
