import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  exportToCSV(csvName: string = 'tabela-completa', tableData: any[], tableColumns: string[]): void {
    const rows: any[][] = tableData.map((item: any): any[] =>
      tableColumns.map((col: string): any => {
        let val: any = item[col];
        if (col === 'valor' && typeof val === 'number') {
          return val.toFixed(2).replace('.', ',');
        }
        return val;
      })
    );
    const csvContent: string = [tableColumns, ...rows].map((row: any[]): string => row.map((val: any): string => `"${val}"`).join(';')).join('\n');
    const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link: HTMLAnchorElement = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', csvName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
