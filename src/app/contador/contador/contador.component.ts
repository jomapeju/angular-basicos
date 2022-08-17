import { Component } from "@angular/core";

@Component ({
    selector: 'app-contador',
    template: `
    
    <h1>{{ title }}</h1> 

    <h1> La base es : {{ base }}</h1>
    <span>El acumulador es {{ numero }}</span>

    <br><br>
    <button (click)="acumular(base)"> + {{ base}} </button>
    <button (click)="acumular(-base)"> - {{ base}}  </button>
    <button (click)="acumular(1)"> +1 </button>
    <button (click)="acumular(-1)"> -1 </button>
    `
})
export class ContadorComponent {
    title :string = 'Contador App';
    numero: number = 0;
    base: number = 5;

    acumular(valor: number) {
        this.numero += valor;
    }
}