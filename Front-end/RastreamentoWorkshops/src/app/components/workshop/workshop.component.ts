import { Component, OnInit } from '@angular/core';
import { WorkshopService } from '../../services/workshop.service';
import { Workshop } from '../../Models/workshop.model';
import { Colaborador } from '../../Models/colaborador.model';
import { ColaboradorService } from '../../services/colaborador.service';


@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit {

  workshops: Workshop[] = [];
  colaboradores: Colaborador[] = [];

  constructor(private workshopService: WorkshopService, private colaboradorService: ColaboradorService) {}

  ngOnInit() {
    this.colaboradorService.getColaboradores().subscribe((colaboradores) => {
      this.colaboradores = colaboradores;
    });
    this.workshopService.getWorkshops().subscribe((workshops) => {
      // get the colaborador name from the id in workshop.colaboradoresId
      workshops.forEach((workshop) => {
        workshop.colaboradores = this.colaboradores.filter((colaborador) => workshop.colaboradoresIds.includes(colaborador.id)).map((colaborador) => colaborador.nome)
      })
      this.workshops = workshops;
    });
  }

}
