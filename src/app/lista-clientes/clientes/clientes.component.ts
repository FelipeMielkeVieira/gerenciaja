import { Component, OnInit } from '@angular/core';
import { embeddedViewStart } from '@angular/core/src/render3/instructions';
import { Router, ActivatedRoute } from '@angular/router';
import * as myGlobals from '../../globals';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  codigoCliente = "";
  nomeCliente = "";
  telefoneCliente = "";

  objetoCliente = {};
  contagem = 0;

  tabela = document.querySelector('table');

  constructor(private router: Router) { }

  ngOnInit() {
    this.chamarLista()
  }

  chamarLista() {

    this.codigoCliente = localStorage.getItem('codigoCliente');
    this.nomeCliente = localStorage.getItem('nomeCliente');
    this.telefoneCliente = localStorage.getItem('telefoneCliente');

    this.objetoCliente = {codigo: this.codigoCliente, nome: this.nomeCliente, telefone: this.telefoneCliente}

    if(this.codigoCliente != '' && this.codigoCliente != "0" && this.codigoCliente != null) {
      myGlobals.listaClientes.push(this.objetoCliente);
    }

    this.adicionarLista();
  }

  adicionarLista() {

    var self = this;

    this.headerLista()

    myGlobals.listaClientes.forEach(function (e) {

      var obj = e;

      let tabela2 = document.querySelector('table');
      let linha = document.createElement('tr');

      linha.className = 'linha'

      let colunaCodigo = document.createElement('td');
      let colunaNome = document.createElement('td');
      let colunaTelefone = document.createElement('td');
      let botaoProduto = document.createElement('button');
      let botaoApagar = document.createElement('button');

      colunaCodigo.innerText = e.codigo;
      colunaNome.innerText = e.nome;
      colunaTelefone.innerText = e.telefone;

      botaoProduto.innerText = "Editar";
      botaoApagar.innerText = "Excluir";

      botaoProduto.onclick = function (e) {
        self.router.navigate(['/pagina-principal/clientes/', obj.codigo])
      }

      botaoApagar.onclick = function (e) {
        tabela2.removeChild(linha);

        var contagem = 0;
        myGlobals.listaClientes.forEach(function (a) {

          if(obj.codigo == a.codigo) {
            myGlobals.listaClientes.splice(contagem, 1);
          }

          contagem++;
        })
      }

      linha.appendChild(colunaCodigo);
      linha.appendChild(colunaNome);
      linha.appendChild(colunaTelefone);
      linha.appendChild(botaoProduto);
      linha.appendChild(botaoApagar)

      tabela2.appendChild(linha);      
    })
  }

  headerLista() {

    let tabela2 = document.querySelector('table');
    let linha = document.createElement('tr');

    linha.className = 'linha'

    let colunaCodigo = document.createElement('th');
    let colunaNome = document.createElement('th');
    let colunaTelefone = document.createElement('th');

    colunaCodigo.className = 'coluna'
    colunaNome.className = 'coluna'
    colunaTelefone.className = 'coluna'

    colunaCodigo.innerText = 'Código'
    colunaNome.innerText = 'Nome'
    colunaTelefone.innerText = 'Telefone'

    linha.appendChild(colunaCodigo)
    linha.appendChild(colunaNome)
    linha.appendChild(colunaTelefone)
    tabela2.appendChild(linha)
  }

  adicionar() {
    this.contagem++
    this.router.navigate(['/pagina-principal/clientes/', 0])
  }

  adicionarProduto(a) {
    console.log(a)
    myGlobals.listaClientes.push(a);
  }

  voltar() {
    this.router.navigate(['/pagina-principal/']);
    localStorage.setItem('codigoCliente', '')
    localStorage.setItem('nomeCliente', '')
    localStorage.setItem('telefoneCliente', '')
  }

  logout() {
    localStorage.removeItem("USER");
    localStorage.removeItem("SENHA");
    this.router.navigate(['']);
  }

}
