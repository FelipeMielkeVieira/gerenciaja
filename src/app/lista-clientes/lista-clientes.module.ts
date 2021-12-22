import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteComponent } from './cliente/cliente.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ClientesComponent, ClienteComponent],
  exports: [ClientesComponent]
})
export class ListaClientesModule { }
