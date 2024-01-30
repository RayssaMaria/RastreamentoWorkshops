import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { ColaboradorComponent } from './components/colaborador/colaborador.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'workshops', component: WorkshopComponent },
    { path: 'colaboradores', component: ColaboradorComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
