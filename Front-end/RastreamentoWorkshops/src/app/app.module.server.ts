import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { ColaboradorComponent } from './components/colaborador/colaborador.component';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
