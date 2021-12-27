import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidosComponent } from './pedidos/pedidos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PedidoComponent, PedidosComponent],
  exports: [PedidoComponent, PedidosComponent]
})
export class GerenciarPedidoModule { }
