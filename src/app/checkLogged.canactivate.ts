import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
class CheckLogged implements CanActivate {
    constructor(private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {
        
        let user = localStorage.getItem('USER');
        let senha = localStorage.getItem('SENHA');
        let contagem = 0;

        let cadastros = [
            { nome: 'Maria Alves', senha: '74621'},
            { nome: 'Bruno Henrique Verbinnen Carvalho', senha: '12345'},
            { nome: 'Felipe Mielke Vieira', senha: '54321'},
            { nome: 'Kenzo Hideaky Ferreira Sato', senha: '09876'},
            { nome: 'Matheus Franzener Hohmann', senha: '67890'}
        ]

        cadastros.forEach(a => {
            if(a.nome == user && a.senha == senha) {
                contagem++;
                return true;
            }
        });
        if(contagem > 0) {
            return true;
        } else {
            this.router.navigate([''])
            return false;
        }
    }
}

export default CheckLogged;