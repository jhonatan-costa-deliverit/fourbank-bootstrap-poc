import { Component } from '@angular/core';
import {SaldosComponent} from '../../components/saldos/saldos.component';
import {FluxoDeCaixaComponent} from '../../components/fluxo-de-caixa/fluxo-de-caixa.component';
import {ChamadosComponent} from '../../components/chamados/chamados.component';
import {DynamicTableComponent} from '../../components/dynamic-table/dynamic-table.component';
import {ChamadoInterface} from '../../interfaces/chamados/chamado.interface';

@Component({
  selector: 'app-dashboard',
  imports: [SaldosComponent, FluxoDeCaixaComponent, ChamadosComponent, DynamicTableComponent,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  tableData = [
    { data: '2025-04-10', conta: '12345678', agencia: '1234', nome: 'João Silva', valor: 1050.55, status: 'Aprovado' },
    { data: '2025-03-05', conta: '87654321', agencia: '4321', nome: 'Maria Oliveira', valor: 200.0, status: 'Analisar' },
    { data: '2025-01-22', conta: '13579246', agencia: '1111', nome: 'Carlos Souza', valor: 330.10, status: 'Negado' },
    { data: '2025-02-15', conta: '24681357', agencia: '2222', nome: 'Fernanda Lima', valor: 785.99, status: 'Aprovado' },
    { data: '2025-04-01', conta: '11223344', agencia: '3333', nome: 'Lucas Mendes', valor: 155.35, status: 'Analisar' },
    { data: '2025-03-20', conta: '44332211', agencia: '4444', nome: 'Patrícia Ribeiro', valor: 980.00, status: 'Negado' },
    { data: '2025-04-05', conta: '99998888', agencia: '5555', nome: 'Ricardo Alves', valor: 620.40, status: 'Aprovado' },
    { data: '2025-04-07', conta: '77776666', agencia: '6666', nome: 'Juliana Costa', valor: 70.75, status: 'Negado' },
    { data: '2025-04-09', conta: '55554444', agencia: '7777', nome: 'André Fernandes', valor: 1500.00, status: 'Analisar' },
    { data: '2025-04-02', conta: '33332222', agencia: '8888', nome: 'Tatiane Rocha', valor: 850.00, status: 'Aprovado' },
    { data: '2025-03-28', conta: '11112222', agencia: '9999', nome: 'Fábio Teixeira', valor: 275.90, status: 'Analisar' },
    { data: '2025-03-12', conta: '10101010', agencia: '0000', nome: 'Larissa Vieira', valor: 420.00, status: 'Negado' }
  ];
  columnsToDisplay: string[] = ['data', 'conta', 'agencia', 'nome', 'valor', 'status'];

  getClickedChamado(chamado: ChamadoInterface): void {
    console.log('chamado', chamado);
  }

  getClickedTableAnalyseData(tableData: any): void {
    console.log('tableData', tableData);
  }

}
