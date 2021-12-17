import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  nomeProduto
  precoProduto
  contagem = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.nomeProduto = route.snapshot.paramMap.get('codigo');

    if(this.nomeProduto == 0) {
      this.nomeProduto = '';
    }
  }


  ngOnInit() {
  }

  add() {
    localStorage.setItem('produto' + this.contagem, this.nomeProduto)
    this.router.navigate(['/pagina-principal/'])
  }

}
