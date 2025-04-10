import {BalanceCardMenuInterface} from './balance-card-menu.interface';

export interface BalanceValueInterface {
  title: string;
  subTitle: string;
  menuActions: BalanceCardMenuInterface[];
  cardValue: number;
}
