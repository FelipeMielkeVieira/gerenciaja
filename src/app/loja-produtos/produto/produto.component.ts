import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import * as myGlobals from '../../globals';
import { Button } from 'selenium-webdriver';
import { endTimeRange } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  listaProdutos = myGlobals.listaProdutos

  codigoProduto = "";
  nomeProduto = "";
  precoProduto = "";
  contagem = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.codigoProduto = route.snapshot.paramMap.get('codigo');

    if(this.codigoProduto == "0") {
      this.codigoProduto = '';
    }
  }


  ngOnInit() {
    this.pegarNomePreço();
  }

  add() {

    if(this.contagem == 1) {
      this.edit();
    } else {
      localStorage.setItem('codigoProduto', this.codigoProduto)
      localStorage.setItem('nomeProduto', this.nomeProduto)
      localStorage.setItem('precoProduto', this.precoProduto)
    }
    this.router.navigate(['/pagina-principal/produtos/'])
  }

  edit() {

    var self = this;

    localStorage.setItem('codigoProduto', '')
    localStorage.setItem('nomeProduto', '')
    localStorage.setItem('precoProduto', '')

    myGlobals.listaProdutos.forEach (function (a) {
      
      if(a.codigo == self.codigoProduto) {
        a.nome = self.nomeProduto;
        a.preco = self.precoProduto

        self.contagem = 0;
      }
    });
  }

  pegarNomePreço() {

    var self = this;
    myGlobals.listaProdutos.forEach (function (a) {
      
      if(a.codigo == self.codigoProduto) {
        self.nomeProduto = a.nome;
        self.precoProduto = a.preco;

        let botaoProduto = document.querySelector('button');

        botaoProduto.innerText = "Editar Produto";

        self.contagem = 1;
      }
    });
  }

  voltar() {
    localStorage.setItem('codigoProduto', '')
    localStorage.setItem('nomeProduto', '')
    localStorage.setItem('precoProduto', '')
    this.router.navigate(['/pagina-principal/produtos/'])
  }

}
