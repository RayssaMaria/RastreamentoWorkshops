import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Colaborador } from '../Models/colaborador.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  private readonly url = 'http://localhost:8090/api/colaborador';

  constructor(private http: HttpClient) {}

  getColaboradores(): Observable<Colaborador[]> {
    // Examplo de mock de dados
    // return of([
    //   new Colaborador(1, 'João Silva'),
    //   new Colaborador(2, 'Maria Santos'),
    //   new Colaborador(3, 'Pedro Souza'),
    // ]);
    const result = this.http.get<Colaborador[]>(this.url);
    if (result) {
      return result;
    }
    return of([]);
  }

}
