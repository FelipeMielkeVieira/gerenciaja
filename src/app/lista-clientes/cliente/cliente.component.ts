import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import * as myGlobals from '../../globals';
import { Button } from 'selenium-webdriver';
import { endTimeRange } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  listaClientes = myGlobals.listaClientes

  codigoCliente = "";
  nomeCliente = "";
  telefoneCliente = "";
  contagem = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.codigoCliente = route.snapshot.paramMap.get('codigo');

    if(this.codigoCliente == "0") {
      this.codigoCliente = '';
    }
  }


  ngOnInit() {
    this.pegarNomeTelefone();
  }

  add() {

    if(this.contagem == 1) {
      this.edit();
    } else {
      localStorage.setItem('codigoCliente', this.codigoCliente)
      localStorage.setItem('nomeCliente', this.nomeCliente)
      localStorage.setItem('telefoneCliente', this.telefoneCliente)
    }
    this.router.navigate(['/pagina-principal/clientes/'])
  }

  edit() {

    var self = this;

    localStorage.setItem('codigoCliente', '')
    localStorage.setItem('nomeCliente', '')
    localStorage.setItem('telefoneCliente', '')

    myGlobals.listaClientes.forEach (function (a) {
      
      if(a.codigo == self.codigoCliente) {
        a.nome = self.nomeCliente;
        a.telefone = self.telefoneCliente

        self.contagem = 0;
      }
    });
  }

  pegarNomeTelefone() {

    var self = this;
    myGlobals.listaClientes.forEach (function (a) {
      
      if(a.codigo == self.codigoCliente) {
        self.nomeCliente = a.nome;
        self.telefoneCliente = a.telefone;

        let botaoCliente = document.querySelector('button');

        botaoCliente.innerText = "Editar Cliente";

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

  logout() {
    localStorage.removeItem("USER");
    localStorage.removeItem("SENHA");
    this.router.navigate(['']);
  }

}
