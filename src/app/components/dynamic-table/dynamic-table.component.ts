import {Component, Input, OnInit} from '@angular/core';
import {CurrencyPipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {UtilsService} from '../../services/utils.service';

@Component({
  selector: 'app-dynamic-table',
  imports: [NgForOf, CurrencyPipe, NgClass, NgIf],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss'
})
export class DynamicTableComponent implements OnInit {
  @Input({required: true}) tableData: any[] = [];
  @Input({required: true}) columnsToDisplay: string[] = [];
  currentPage: number = 1;
  pageSize: number = 5;
  pagedData: any[] = [];
  sortColumn: string = '';
  sortDirection: boolean = true;
  @Input() csvName: string = 'tabela-completa';

  constructor(protected utilService: UtilsService) {}

  ngOnInit(): void {
    this.setPage(1);
  }

  setPage(page: number): void {
    if (page < 1 || page > this.getTotalPages()) return;
    this.currentPage = page;
    const start: number = (page - 1) * this.pageSize;
    const end: number = start + this.pageSize;
    this.pagedData = [...this.tableData.slice(start, end)];
  }

  getTotalPages(): number {
    return Math.ceil(this.tableData.length / this.pageSize);
  }

  getPages(): number[] {
    return Array.from({ length: this.getTotalPages() }, (_, i) => i + 1);
  }

  sortData(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = !this.sortDirection;
    } else {
      this.sortColumn = column;
      this.sortDirection = true;
    }

    this.tableData.sort((a: any, b: any): 0 | 1 | -1 => {
      let valA: any = a[column];
      let valB: any = b[column];

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

}
