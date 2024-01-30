import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../../services/colaborador.service';
import { Colaborador } from '../../Models/colaborador.model';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})
export class ColaboradorComponent implements OnInit {

  colaboradores: Colaborador[] = [];

  constructor(private colaboradorService: ColaboradorService) {}

  ngOnInit() {
    this.colaboradorService.getColaboradores().subscribe((colaboradores) => {
      this.colaboradores = colaboradores;
    });
  }

}