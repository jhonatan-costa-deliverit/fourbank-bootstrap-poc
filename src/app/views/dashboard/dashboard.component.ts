import { Component } from '@angular/core';
import {SaldosComponent} from '../../components/saldos/saldos.component';
import {FluxoDeCaixaComponent} from '../../components/fluxo-de-caixa/fluxo-de-caixa.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    SaldosComponent,
    FluxoDeCaixaComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
