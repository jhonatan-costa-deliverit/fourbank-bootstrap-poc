import {Component, Input, OnInit} from '@angular/core';
import {CurrencyPipe, NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-dynamic-table',
  imports: [
    NgForOf,
    CurrencyPipe,
    NgClass,
    NgIf
  ],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss'
})
export class DynamicTableComponent implements OnInit {
  @Input() tableData: any[] = [];

  currentPage = 1;
  pageSize = 5;
  pagedData: any[] = [];

  sortColumn: string = '';
  sortDirection: boolean = true; // true = asc, false = desc

  ngOnInit() {
    this.setPage(1);
  }

  setPage(page: number) {
    if (page < 1 || page > this.getTotalPages()) return;
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedData = [...this.tableData.slice(start, end)];
  }

  getTotalPages(): number {
    return Math.ceil(this.tableData.length / this.pageSize);
  }

  getPages(): number[] {
    return Array.from({ length: this.getTotalPages() }, (_, i) => i + 1);
  }

  sortData(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = !this.sortDirection;
    } else {
      this.sortColumn = column;
      this.sortDirection = true;
    }

    this.tableData.sort((a, b) => {
      let valA = a[column];
      let valB = b[column];

      if (column === 'data') {
        valA = new Date(valA);
        valB = new Date(valB);
      } else if (column === 'valor') {
        valA = parseFloat(valA);
        valB = parseFloat(valB);
      } else {
        valA = valA.toString().toLowerCase();
        valB = valB.toString().toLowerCase();
      }

      if (valA < valB) return this.sortDirection ? -1 : 1;
      if (valA > valB) return this.sortDirection ? 1 : -1;
      return 0;
    });

    this.setPage(1);
  }

  getSortIcon(column: string): string {
    if (this.sortColumn !== column) return 'bi bi-arrow-down-up';
    return this.sortDirection ? 'bi bi-arrow-up' : 'bi bi-arrow-down';
  }

  exportToCSV() {
    const headers = ['Data', 'Conta', 'Agência', 'Nome', 'Valor', 'Status'];
    const rows = this.tableData.map(item => [
      item.data,
      item.conta,
      item.agencia,
      item.nome,
      item.valor.toFixed(2).replace('.', ','), // vírgula no valor
      item.status
    ]);

    const csvContent = [headers, ...rows]
      .map(row => row.map(val => `"${val}"`).join(';'))
      .join('\n');

    const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'tabela-completa.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
