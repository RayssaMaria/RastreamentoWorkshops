import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workshop } from '../Models/workshop.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {
  private readonly url = 'http://localhost:8090/api/workshop'

  constructor(private http: HttpClient) {}

  getWorkshops(): Observable<Workshop[]> {
    // Exemplo de mock de dados
    // return of([
    //   new Workshop(1, 'Workshop de Desenvolvimento Angular', new Date('2023-10-25'), 'Aprenda os fundamentos do Angular e crie aplicações web interativas.'),
    //   new Workshop(2, 'Workshop de Design Thinking', new Date('2023-12-09'), 'Descubra como aplicar o Design Thinking para resolver problemas de forma inovadora.'),
    //   new Workshop(3, 'Workshop de Gestão de Projetos', new Date('2024-01-18'), 'Aprenda as melhores práticas para gerenciar projetos com eficiência.'),
    // ]);
    const result = this.http.get<Workshop[]>(this.url);
    if (result) {
      return result;
    }
    return of([]);
  }

}
