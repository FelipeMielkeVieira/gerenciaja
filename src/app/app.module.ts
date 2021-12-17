import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GerenciarPedidoModule } from './gerenciar-pedido/gerenciar-pedido.module';
import { ListaClientesModule } from './lista-clientes/lista-clientes.module';
import { LojaProdutosModule } from './loja-produtos/loja-produtos.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { Router, RouterModule, Routes } from '@angular/router';
import CheckLogged from './checkLogged.canactivate';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent,
        canActivate: []
      }
    ]),
    BrowserModule,
    GerenciarPedidoModule,
    ListaClientesModule,
    LojaProdutosModule,
    FormsModule,
    RouterModule
  ],
  providers: [CheckLogged],
  bootstrap: [AppComponent]
})
export class AppModule { }
