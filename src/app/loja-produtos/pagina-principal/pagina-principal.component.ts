import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  produtos() {
    this.router.navigate(['/pagina-principal/produtos'])
  }

  clientes() {
    this.router.navigate(['/pagina-principal/clientes'])
  }

  pedidos() {
    this.router.navigate(['/pagina-principal/pedidos'])
  }

}
