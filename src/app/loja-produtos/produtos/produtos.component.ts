import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listaProdutos = []
  contagem = 0;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  adicionar() {
    this.contagem++
    this.router.navigate(['/pagina-principal/produtos/', 0])
  }

  adicionarProduto(a) {
    console.log(a)
    this.listaProdutos.push(a);
  }

}
