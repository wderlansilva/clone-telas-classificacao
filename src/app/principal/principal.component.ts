import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClassificacaoService } from './services/classificacao.service';
import { TableMocada } from './model/table-mocada';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements AfterViewInit {
  verificaArrow: boolean = true;

  classificacaoSelecionada: any;

  modalRemover: boolean = false;
  popRemoveSuccess: boolean = false;

  onClick() {
    if (this.verificaArrow) {
      this.verificaArrow = false;
    } else {
      this.verificaArrow = true;
    }
  }

  displayedColumns: string[] = [
    'protocolo',
    'descricao',
    'sigla',
    'corDeReferencia',
    'tempoAtivo',
    'atSocial',
    'editar',
    'excluir',
  ];

  // Tipando como observable você não vai ter acesso as propriedades do MatTable.
  // tabelaMocada: Observable<TableMocada[]>;

  // Tipagem como MatTable para ter acesso as suas propriedades
  tabelaMocada!: MatTableDataSource<Observable<TableMocada>>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private paginatorIntl: MatPaginatorIntl,
    public dialog: MatDialog,
    private service: ClassificacaoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Populando a MatTable fazendo a inscrição manual no observable.
    this.service.list().subscribe((classificacoes) => {
      this.tabelaMocada = new MatTableDataSource(classificacoes);
      this.tabelaMocada.paginator = this.paginator;
      this.tabelaMocada.sort = this.sort;
    });

    // versão para retornar apenas um obervable(você não tem acesso as propriedades do MatTableDataSource(ex: Paginator))
    // this.tabelaMocada = this.service.list();

    // tradução do paginator
    this.paginatorIntl.itemsPerPageLabel = 'Itens por página';
  }

  onEdit(id: any) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  remover(classificacao: any) {
    this.classificacaoSelecionada = classificacao;
    console.log(this.classificacaoSelecionada);
    this.modalRemover = true;
  }

  confirmRemove() {
    this.service
      .remove(this.classificacaoSelecionada.id)
      .subscribe((success) => {
        this.onReload();
        this.popRemoveSuccess = false;
      });
  }

  ativaPopUp() {
    this.modalRemover = false;
    this.popRemoveSuccess = true;
  }

  cancel() {
    this.modalRemover = false;
    this.popRemoveSuccess = false;
  }

  onReload() {
    // funciona apenas se a tabela for um observable
    // this.tabelaMocada = this.service.list().pipe();

    // maneira para atualizar a table do MatTable
    this.service.list().subscribe((data) => {
      this.tabelaMocada.data = data;
    });
  }

  ngAfterViewInit() {}

  applyFilter(event: Event) {
    console.log(event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.tabelaMocada.filter = filterValue.trim().toLowerCase();
    if (this.tabelaMocada.paginator) {
      this.tabelaMocada.paginator.firstPage();
    }
  }
}
