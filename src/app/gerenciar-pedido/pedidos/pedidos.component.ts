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
    this.chamarLista();
  }

  chamarLista() {

    this.numeroPedido = localStorage.getItem('numeroPedido');
    this.statusPedido = localStorage.getItem('statusPedido');
    this.clientePedido = localStorage.getItem('clientePedido');
    this.qtdProdutos = localStorage.getItem('qtdProdutos');

    this.objetoPedido = { codigo: this.numeroPedido, status: this.statusPedido, cliente: this.clientePedido, qtd: this.qtdProdutos }

    if (this.numeroPedido != '' && this.numeroPedido != "0" && this.numeroPedido != null) {
      myGlobals.listaPedidos.push(this.objetoPedido);
    }

    this.adicionarLista();
  }

  adicionarLista() {

    var self = this;

    myGlobals.listaPedidos.forEach(function (e) {

      var obj = e;

      let tabela2 = document.querySelector('table');
      let linha = document.createElement('tr');

      let colunaCodigo = document.createElement('td');
      let colunaNome = document.createElement('td');
      let colunaPreço = document.createElement('td');
      let botaoProduto = document.createElement('button');
      let botaoApagar = document.createElement('button');

      colunaCodigo.innerText = e.codigo;
      colunaNome.innerText = e.nome;
      colunaPreço.innerText = e.preco;

      botaoProduto.innerText = "Editar";
      botaoApagar.innerText = "Excluir";

      botaoProduto.onclick = function (e) {
        self.router.navigate(['/pagina-principal/produtos/', obj.codigo])
      }

      botaoApagar.onclick = function (e) {
        tabela2.removeChild(linha);

        var contagem = 0;
        myGlobals.listaProdutos.forEach(function (a) {

          if(obj.codigo == a.codigo) {
            myGlobals.listaProdutos.splice(contagem, 1);
          }

          contagem++;
        })
      }


      linha.appendChild(colunaCodigo);
      linha.appendChild(colunaNome);
      linha.appendChild(colunaPreço);
      linha.appendChild(botaoProduto);
      linha.appendChild(botaoApagar);

      tabela2.appendChild(linha);

    })
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
