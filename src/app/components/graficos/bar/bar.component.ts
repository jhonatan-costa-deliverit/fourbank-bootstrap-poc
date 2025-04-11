import {Component, Input, OnInit} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {ChartConfiguration, ChartOptions, TooltipItem} from 'chart.js';
import {BarDataInterface} from '../../../interfaces/graficos/bar-data.interface';
import {NgIf} from '@angular/common';
import {SimpleSpinnerComponent} from '../../simple-spinner/simple-spinner.component';

@Component({
  selector: 'app-bar',
  imports: [BaseChartDirective, NgIf, SimpleSpinnerComponent],
  templateUrl: './bar.component.html'
})
export class BarComponent implements OnInit {
  @Input({required: true}) barData: BarDataInterface = {data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]};
  showSpinner: boolean = true;
  public barChartOptions!: ChartOptions<'bar'>;
  public barChartData!: ChartConfiguration<'bar'>['data'];

  ngOnInit(): void{
    this.getBarChartOptions();
    this.getBarChartData();
  }

  getBarChartOptions(): void {
    this.barChartOptions = {
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
              return `${label}: R$ ${value.toLocaleString('pt-BR', {
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
              return 'R$ ' + (value).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              });
            }
          }
        }
      }
    };
  }

  getBarChartData(): void {
    const rawData: number[] = this.barData.data;
    const positiveData: number[] = rawData.map((value: number): number => value > 0 ? value : 0);
    const negativeData: number[] = rawData.map((value: number): number => value < 0 ? value : 0);
    this.barChartData = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [
        {
          data: positiveData,
          label: 'Fluxo Positivo',
          backgroundColor: '#4caf50'
        },
        {
          data: negativeData,
          label: 'Fluxo Negativo',
          backgroundColor: '#f44336'
        }
      ]
    };
    setTimeout((): boolean => this.showSpinner = false, 1000);
  }
}
