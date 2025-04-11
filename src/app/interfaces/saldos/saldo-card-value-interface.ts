import {SaldoCardMenuInterface} from './saldo-card-menu.interface';

export interface SaldoCardValueInterface {
  title: string;
  subTitle: string;
  menuActions: SaldoCardMenuInterface[];
  cardValue: number;
}
