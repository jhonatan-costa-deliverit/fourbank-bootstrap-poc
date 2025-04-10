import { Component } from '@angular/core';
import {CardMenuInterface, SaldoCardComponent} from './saldo-card/saldo-card.component';

export interface ValuesInterface {
  title: string;
  subTitle: string;
  menuActions: CardMenuInterface[];
  cardValue: number;
}

@Component({
  selector: 'app-saldos',
  imports: [
    SaldoCardComponent
  ],
  templateUrl: './saldos.component.html',
  styleUrl: './saldos.component.scss'
})
export class SaldosComponent {
  cardOne: ValuesInterface = {
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

  cardTwo: ValuesInterface = {
    title: 'Aporte / Saque',
    subTitle: 'Saldo negativo, aportar saldo',
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
