import {CardMenuInterface} from './balance-card-menu.interface';

export interface BalanceValueInterface {
  title: string;
  subTitle: string;
  menuActions: CardMenuInterface[];
  cardValue: number;
}
