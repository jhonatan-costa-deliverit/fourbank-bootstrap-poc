import { Component } from '@angular/core';
import {BarComponent} from '../graficos/bar/bar.component';
import {DonutComponent} from '../graficos/donut/donut.component';

@Component({
  selector: 'app-fluxo-de-caixa',
  imports: [
    BarComponent,
    DonutComponent
  ],
  templateUrl: './fluxo-de-caixa.component.html',
  styleUrl: './fluxo-de-caixa.component.scss'
})
export class FluxoDeCaixaComponent {

}
