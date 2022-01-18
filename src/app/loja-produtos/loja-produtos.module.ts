import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoComponent } from './produto/produto.component';
import CheckLogged from '../checkLogged.canactivate';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from '../lista-clientes/clientes/clientes.component';
import { PedidoComponent } from '../gerenciar-pedido/pedido/pedido.component';
import { PedidosComponent } from '../gerenciar-pedido/pedidos/pedidos.component';
import { ClienteComponent } from '../lista-clientes/cliente/cliente.component';

const routes: Routes = [
  {
    path: 'pagina-principal',
    canActivate: [CheckLogged],
    children: [
      { path: '', component: PaginaPrincipalComponent},
      { path: 'produtos', children: [
        { path: '', component: ProdutosComponent},
        { path: ':codigo', component: ProdutoComponent}
      ]},
      { path: 'clientes', children: [
        { path: '', component: ClientesComponent},
        { path: ':codigo', component: ClienteComponent}
      ]},
      { path: 'pedidos', children: [
        { path: '', component: PedidosComponent},
        { path: ':codigo', component: PedidoComponent}
      ]}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule
  ],
  declarations: [ProdutosComponent, ProdutoComponent, PaginaPrincipalComponent],
  exports: [ProdutoComponent, ProdutosComponent, PaginaPrincipalComponent],
  providers: [CheckLogged]
})
export class LojaProdutosModule { }
