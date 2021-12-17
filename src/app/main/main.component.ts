import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user = '';
  senha = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  entrar() {
    this.router.navigate(['/pagina-principal/'])
    localStorage.setItem('USER', this.user)
    localStorage.setItem('SENHA', this.senha)
    console.log(this.user)
  }

}
