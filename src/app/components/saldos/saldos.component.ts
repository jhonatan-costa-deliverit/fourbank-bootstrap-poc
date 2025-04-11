import { Component } from '@angular/core';
import {SaldoCardComponent} from './saldo-card/saldo-card.component';
import {SaldoCardValueInterface} from '../../interfaces/saldos/saldo-card-value-interface';
import {CurrencyPipe} from "@angular/common";
import {SaldoContasInterface} from '../../interfaces/saldos/saldo-contas.interface';

@Component({
  selector: 'app-saldos',
  imports: [SaldoCardComponent, CurrencyPipe],
  templateUrl: './saldos.component.html',
  styleUrl: './saldos.component.scss'
})
export class SaldosComponent {
  cardOne: SaldoCardValueInterface = {
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
  cardTwo: SaldoCardValueInterface = {
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
  saldoContas: SaldoContasInterface = {saldoContaCorrente: 900667.79, saldoInicial: 2145092.30};

}
