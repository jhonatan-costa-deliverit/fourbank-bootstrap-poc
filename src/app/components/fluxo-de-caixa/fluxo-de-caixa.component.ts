import { Component } from '@angular/core';
import {BarComponent} from '../graficos/bar/bar.component';
import {PieComponent} from '../graficos/pie/pie.component';

@Component({
  selector: 'app-fluxo-de-caixa',
  imports: [
    BarComponent,
    PieComponent
  ],
  templateUrl: './fluxo-de-caixa.component.html',
  styleUrl: './fluxo-de-caixa.component.scss'
})
export class FluxoDeCaixaComponent {

}
