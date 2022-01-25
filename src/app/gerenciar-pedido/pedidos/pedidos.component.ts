import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../../globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private router: Router) { }

  numeroPedido = "";
  statusPedido = "";
  clientePedido = "";
  qtdProdutos = "";

  objetoPedido = {};

  ngOnInit() {
    console.log(myGlobals.listaPedidos)
    this.adicionarLista();
  }

  adicionarLista() {

    var self = this;

    this.headerLista()

    myGlobals.listaPedidos.forEach(function (e) {

      var obj = e;

      let tabela2 = document.querySelector('table');
      let linha = document.createElement('tr');

      linha.className = 'linha'

      let colunaNumero = document.createElement('td');
      let colunaStatus = document.createElement('td');
      let colunaCliente = document.createElement('td');
      let colunaProduto = document.createElement('td');
      let colunaQuantidade = document.createElement('td');
      let colunaValor = document.createElement('td');
      let botaoFechar = document.createElement('button');
      let botaoCancelar = document.createElement('button');

      colunaNumero.className = 'coluna'
      colunaStatus.className = 'coluna'
      colunaCliente.className = 'coluna'
      colunaProduto.className = 'coluna'
      colunaQuantidade.className = 'coluna'
      colunaValor.className = 'coluna'

      colunaNumero.innerText = e.codigoPedido;
      colunaStatus.innerText = e.status;
      colunaCliente.innerText = e.nomeCliente;
      colunaProduto.innerText = e.nomeProduto;
      colunaQuantidade.innerText = e.quantidade;
      colunaValor.innerText = e.valor;

      botaoFechar.innerText = "Fechar Pedido";
      botaoCancelar.innerText = "Cancelar Pedido";

      botaoFechar.onclick = function (e) {
        colunaStatus.innerText = 'Pedido Fechado'
      }

      botaoCancelar.onclick = function (e) {
        colunaStatus.innerText = 'Pedido Cancelado'
      }


      linha.appendChild(colunaNumero);
      linha.appendChild(colunaStatus);
      linha.appendChild(colunaCliente);
      linha.appendChild(colunaProduto);
      linha.appendChild(colunaQuantidade);
      linha.appendChild(colunaValor);
      linha.appendChild(botaoFechar);
      linha.appendChild(botaoCancelar);

      tabela2.appendChild(linha);

    })
  }

  headerLista() {

    let tabela2 = document.querySelector('table');
    let linha = document.createElement('tr');

    linha.className = 'linha'

    let colunaNumero = document.createElement('td');
    let colunaStatus = document.createElement('td');
    let colunaCliente = document.createElement('td');
    let colunaProduto = document.createElement('td');
    let colunaQuantidade = document.createElement('td');
    let colunaValor = document.createElement('td');

    colunaNumero.className = 'coluna'
    colunaStatus.className = 'coluna'
    colunaCliente.className = 'coluna'
    colunaProduto.className = 'coluna'
    colunaQuantidade.className = 'coluna'
    colunaValor.className = 'coluna'

    colunaNumero.innerText = 'Número do pedido'
    colunaStatus.innerText = 'Status'
    colunaCliente.innerText = 'Nome do Cliente'
    colunaProduto.innerText = 'Nome do Produto'
    colunaQuantidade.innerText = 'Quantidade de Produtos'
    colunaValor.innerText = 'Valor Final'

    linha.appendChild(colunaNumero)
    linha.appendChild(colunaStatus)
    linha.appendChild(colunaCliente)
    linha.appendChild(colunaProduto)
    linha.appendChild(colunaQuantidade)
    linha.appendChild(colunaValor)

    tabela2.appendChild(linha)
  }

  voltar() {
    this.router.navigate(['/pagina-principal/']);
    localStorage.setItem('codigoProduto', '')
    localStorage.setItem('nomeProduto', '')
    localStorage.setItem('precoProduto', '')
  }

  logout() {
    localStorage.removeItem("USER");
    localStorage.removeItem("SENHA");
    this.router.navigate(['']);
  }

  adicionar() {
    this.router.navigate(['/pagina-principal/pedidos/', 0])
  }

}
