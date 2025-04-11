import {Component, Input, OnInit} from '@angular/core';
import {ChartConfiguration, ChartOptions, TooltipItem} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';
import {DonutDataInterface} from '../../../interfaces/graficos/donut-data.interface';
import {SimpleSpinnerComponent} from '../../simple-spinner/simple-spinner.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-donut',
  imports: [BaseChartDirective, SimpleSpinnerComponent, NgIf],
  templateUrl: './donut.component.html'
})
export class DonutComponent implements OnInit {
  showSpinner: boolean = true;
  @Input({required: true}) donutData: DonutDataInterface = {pagamentoEnviado: 0, pagamentoRecebido: 0};
  public donutChartOptions!: ChartOptions<'doughnut'>;
  public donutChartData!: ChartConfiguration<'doughnut'>['data'];

  ngOnInit(): void{
    this.getDonutOptions();
    this.getDonutChartData();
  }

  getDonutOptions(): void {
    this.donutChartOptions = {
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
              return `${label}: R$ ${value.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}`;
            }
          }
        }
      }
    };
  }

  getDonutChartData(): void {
    this.donutChartData = {
      labels: ['Pagamento Recebido', 'Pagamento Enviado'],
      datasets: [{
        data: [this.donutData.pagamentoRecebido, this.donutData.pagamentoEnviado],
        backgroundColor: ['#2172b8', '#79c7eb'],
        hoverOffset: 10
      }]
    };
    setTimeout((): boolean => this.showSpinner = false, 1000);
  }

}
