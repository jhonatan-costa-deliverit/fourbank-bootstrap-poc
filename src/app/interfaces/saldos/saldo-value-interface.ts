import {SaldoCardMenuInterface} from './saldo-card-menu.interface';

export interface SaldoValueInterface {
  title: string;
  subTitle: string;
  menuActions: SaldoCardMenuInterface[];
  cardValue: number;
}
