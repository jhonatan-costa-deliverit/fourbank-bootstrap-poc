import {Component} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {ChartConfiguration, ChartOptions, TooltipItem} from 'chart.js';

@Component({
  selector: 'app-bar',
  imports: [BaseChartDirective],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent {
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'bar'>): string {
            const label: string = context.dataset.label || '';
            const value = context.raw as number;
            return `${label}: R$ ${(value / 100).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}`;
          }
        }
      }
    },
    scales: {
      y: {
        ticks: {
          stepSize: 5000000,
          callback: function (value: string | number): string {
            return 'R$ ' + (Number(value) / 100).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            });
          }
        }
      }
    }
  };

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [
      {
        data: [450000, 250000, 300000, 220000, 450000, 250000, 300000, 220000, 450000, 250000, 300000, 220000],
        label: 'Fluxo Positivo',
        backgroundColor: '#4caf50'
      },
      {
        data: [-280000, -480000, -400000, -190000, -280000, -480000, -400000, -190000, -280000, -480000, -400000, -190000],
        label: 'Fluxo Negativo',
        backgroundColor: '#f44336'
      }
    ]
  };
}
