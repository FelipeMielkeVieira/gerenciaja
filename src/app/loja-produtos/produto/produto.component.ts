import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  nomeProduto = "";
  precoProduto = "";
  contagem = 1;

  @Output() addProduto = new EventEmitter<any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.nomeProduto = route.snapshot.paramMap.get('codigo');

    if(this.nomeProduto == "0") {
      this.nomeProduto = '';
    }
  }


  ngOnInit() {
  }

  add() {
    localStorage.setItem('produto' + this.contagem, this.nomeProduto)
    this.router.navigate(['/pagina-principal/produtos/'])
    this.cadastroProduto();
  }

  cadastroProduto() {
    this.addProduto.emit({nome: this.nomeProduto, valor: this.precoProduto});
  }

}
