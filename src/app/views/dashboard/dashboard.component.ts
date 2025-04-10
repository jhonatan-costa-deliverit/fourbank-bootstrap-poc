import { Component } from '@angular/core';
import {SaldosComponent} from '../../components/saldos/saldos.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    SaldosComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
