import { Component, OnInit } from '@angular/core';
import { embeddedViewStart } from '@angular/core/src/render3/instructions';
import { Router, ActivatedRoute } from '@angular/router';
import * as myGlobals from '../../globals';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  codigoProduto = "";
  nomeProduto = "";
  precoProduto = "";

  objetoProduto = {};
  contagem = 0;

  tabela = document.querySelector('table');

  constructor(private router: Router) { }

  ngOnInit() {
    this.chamarLista()
  }

  chamarLista() {

    this.codigoProduto = localStorage.getItem('codigoProduto');
    this.nomeProduto = localStorage.getItem('nomeProduto');
    this.precoProduto = localStorage.getItem('precoProduto');

    this.objetoProduto = { codigo: this.codigoProduto, nome: this.nomeProduto, preco: this.precoProduto }

    if (this.codigoProduto != '' && this.codigoProduto != "0" && this.codigoProduto != null) {
      myGlobals.listaProdutos.push(this.objetoProduto);
    }

    this.adicionarLista();
  }

  adicionarLista() {

    var self = this;

    myGlobals.listaProdutos.forEach(function (e) {

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

  adicionar() {
    this.contagem++
    this.router.navigate(['/pagina-principal/produtos/', 0])
  }

  adicionarProduto(a) {
    console.log(a)
    myGlobals.listaProdutos.push(a);
  }

  voltar() {
    this.router.navigate(['/pagina-principal/']);
    localStorage.setItem('codigoProduto', '')
    localStorage.setItem('nomeProduto', '')
    localStorage.setItem('precoProduto', '')
  }

}
