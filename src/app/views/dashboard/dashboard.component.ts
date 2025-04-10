import { Component } from '@angular/core';
import {SaldosComponent} from '../../components/saldos/saldos.component';
import {FluxoDeCaixaComponent} from '../../components/fluxo-de-caixa/fluxo-de-caixa.component';
import {ChamadosComponent} from '../../components/chamados/chamados.component';
import {DynamicTableComponent} from '../../components/dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    SaldosComponent,
    FluxoDeCaixaComponent,
    ChamadosComponent,
    DynamicTableComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
