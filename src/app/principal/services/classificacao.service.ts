import { TableMocada } from './../model/table-mocada';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, tap, Observable, take } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class ClassificacaoService {

  private readonly API = 'http://localhost:3000/classificao';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<any[]>(this.API)
    .pipe(
      first(),
      tap(classifi => console.log(classifi))
    );
  }

  loadById(id: any){
    return this.httpClient.get(`${this.API}/${id}`).pipe(take(1));
  }

  create(classificacao: TableMocada){
    return this.httpClient.post(this.API, classificacao).pipe(
      take(1)
    );
  }

  update(classificacao: TableMocada){
    return this.httpClient.put(`${this.API}/${classificacao.id}`, classificacao).pipe(take(1));
  }

  remove(id: any){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
