import { Component } from '@angular/core';
import {ChartConfiguration, ChartOptions, TooltipItem} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-donut',
  imports: [BaseChartDirective],
  templateUrl: './donut.component.html',
  styleUrl: './donut.component.scss'
})
export class DonutComponent {
  public donutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'doughnut'>): string {
            const label: string = context.label || '';
            const value = context.raw as number;
            return `${label}: R$ ${(value / 100).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}`;
          }
        }
      }
    }
  };

  public donutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Pagamento Recebido', 'Pagamento Enviado'],
    datasets: [{
      data: [251118924, 281603420],
      backgroundColor: ['#2172b8', '#79c7eb'],
      hoverOffset: 10
    }]
  };
}
