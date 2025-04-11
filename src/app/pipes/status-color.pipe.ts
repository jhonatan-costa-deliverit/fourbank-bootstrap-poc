import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor'
})
export class StatusColorPipe implements PipeTransform {

  transform(data: any): string {
    switch (data?.status?.toLowerCase()) {
      case 'aprovado':
        return '#a1d586';
      case 'negado':
        return '#d44242';
      case 'analisar':
        return '#001F2B';
      default:
        return '#001F2B';
    }
  }

}
