import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes : String[] = ['Spiderman','Ironman','Hulk','Goku'];
  heroeBorrado : String = '';

  borrarHeroe(): void {
    console.log('borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
