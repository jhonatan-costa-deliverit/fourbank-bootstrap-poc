import { Component } from '@angular/core';
import {SaldoCardComponent} from './saldo-card/saldo-card.component';
import {BalanceValueInterface} from '../../interfaces/saldos/balance-value-interface';
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-saldos',
    imports: [
        SaldoCardComponent,
        CurrencyPipe
    ],
  templateUrl: './saldos.component.html',
  styleUrl: './saldos.component.scss'
})
export class SaldosComponent {
  cardOne: BalanceValueInterface = {
    title: 'Saldo Atual',
    subTitle: 'Alerta de limite - R$: 500.000',
    menuActions: [
      {
        linkText: 'Editar Alerta de Limite',
        redirectLink: '#',
      },
      {
        linkText: 'Detalhes',
        redirectLink: '#',
      }
    ],
    cardValue: 1340247.34
  };

  cardTwo: BalanceValueInterface = {
    title: 'Aporte / Saque',
    subTitle: 'Saldo negativo, precisa aportar saldo.',
    menuActions: [
      {
        linkText: 'Aportar',
        redirectLink: '#',
      },
      {
        linkText: 'Sacar',
        redirectLink: '#',
      }
    ],
    cardValue: -500000.00
  }

}
