import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteComponent } from './cliente/cliente.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClientesComponent, ClienteComponent],
  exports: [ClientesComponent]
})
export class ListaClientesModule { }
