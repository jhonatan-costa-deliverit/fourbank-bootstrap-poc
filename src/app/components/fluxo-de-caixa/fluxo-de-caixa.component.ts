import {Component} from '@angular/core';
import {BarComponent} from '../graficos/bar/bar.component';
import {DonutComponent} from '../graficos/donut/donut.component';
import {DonutDataInterface} from '../../interfaces/graficos/donut-data.interface';
import {CurrencyPipe} from '@angular/common';
import {BarDataInterface} from '../../interfaces/graficos/bar-data.interface';

@Component({
  selector: 'app-fluxo-de-caixa',
  imports: [BarComponent, DonutComponent, CurrencyPipe,],
  templateUrl: './fluxo-de-caixa.component.html',
  styleUrl: './fluxo-de-caixa.component.scss'
})
export class FluxoDeCaixaComponent {
  fluxoCaixaDonutData: DonutDataInterface = {pagamentoEnviado: 2816034.20, pagamentoRecebido: 2511189.24};
  fluxoCaixaBarData: BarDataInterface = {data: [450000, -250000, 300000, 220000, 450000, 250000, -300000, 220000, -450000, 250000, 300000, 220000]};
}
