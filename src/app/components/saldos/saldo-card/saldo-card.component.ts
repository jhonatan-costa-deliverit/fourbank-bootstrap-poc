import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {SaldoCardMenuInterface} from '../../../interfaces/saldos/saldo-card-menu.interface';

@Component({
  selector: 'app-saldo-card',
  imports: [NgIf, NgForOf, NgClass, CurrencyPipe],
  templateUrl: './saldo-card.component.html',
  styleUrl: './saldo-card.component.scss'
})
export class SaldoCardComponent {
  @Input({required: true}) title: string = 'Saldo';
  @Input({required: true}) subTitle: string = 'Limite';
  @Input({required: true}) menuActions: SaldoCardMenuInterface[] = [];
  @Input({required: true}) cardValue: number = 0;

  constructor(public router: Router) {}

  redirectToUrl(url: string): void {
    void this.router.navigate([url]);
  }

}
