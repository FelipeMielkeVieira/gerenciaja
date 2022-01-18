import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../../globals';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.numeroPedido()
    this.listaClientes()
  }

  numeroP = 1
  status = "Em Andamento"

  numeroPedido() {

    var self = this

    myGlobals.listaPedidos.forEach(function () {
      self.numeroP++
    })
  }

  listaClientes() {

    myGlobals.listaClientes.forEach(function (e) {
      
      let select = document.getElementById('select')

      let opcao = document.createElement('option')
      opcao.innerText = e.nome

      select.appendChild(opcao)
    });
  }

}
