import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../../globals';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.numeroPedido()
    this.listaClientes()
    this.listaProdutos()
  }

  numeroP = 1
  status = "Em Andamento"
  telefoneCliente = ""
  codigoCliente = ""
  nomeCliente = ""
  nomeProduto = ""
  codigoProduto = ""
  valorTotal = 0
  qtd = 1

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

      opcao.value = e.codigo

      select.appendChild(opcao)
    });
  }

  mudarSelect(codigo) {

    var self = this

    self.status = "Em Aberto"

    myGlobals.listaClientes.forEach(function (e) {

      if(e.codigo == codigo) {
        self.codigoCliente = codigo
        self.telefoneCliente = e.telefone
        self.nomeCliente = e.nome
      }
    })
  }

  listaProdutos() {

    myGlobals.listaProdutos.forEach(function (e) {
      
      let select = document.getElementById('select2')

      let opcao = document.createElement('option')
      opcao.innerText = e.nome

      opcao.value = e.codigo

      select.appendChild(opcao)
    });
  }

  mudarSelect2(codigo) {

    var self = this

    myGlobals.listaProdutos.forEach(function (e) {

      if(e.codigo == codigo) {
        self.codigoProduto = e.codigo
        self.valorTotal = self.qtd * e.preco
        self.nomeProduto = e.nome
      }
    })
  }

  qtdProduto() {

    var self = this

    let inputQtd = document.querySelector('input')
    this.qtd = parseInt(inputQtd.value)

    myGlobals.listaProdutos.forEach(function (e) {

      if(e.codigo == self.codigoProduto) {
        self.valorTotal = self.qtd * e.preco
      }
    })
  }

  fecharOrcamento() {

    if(this.valorTotal > 0) {

      this.status = "Orçamento Fechado"

      let objeto = { codigoPedido: this.numeroP, codigoProduto: this.codigoProduto, codigoCliente: this.codigoCliente, nomeCliente: this.nomeCliente, nomeProduto: this.nomeProduto, valor: this.valorTotal, status: this.status, quantidade: this.qtd}
    
      myGlobals.listaPedidos.push(objeto)
      this.router.navigate(['/pagina-principal/pedidos/'])
    }
  }

  logout() {
    localStorage.removeItem("USER");
    localStorage.removeItem("SENHA");
    this.router.navigate(['']);
  }

  voltar() {
    localStorage.setItem('codigoProduto', '')
    localStorage.setItem('nomeProduto', '')
    localStorage.setItem('precoProduto', '')
    this.router.navigate(['/pagina-principal/pedidos/'])
  }

}
