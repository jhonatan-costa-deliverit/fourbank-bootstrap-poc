import { Component } from '@angular/core';
import {ChamadoInterface} from '../../interfaces/chamados/chamado.interface';

@Component({
  selector: 'app-chamados',
  imports: [],
  templateUrl: './chamados.component.html',
  styleUrl: './chamados.component.scss'
})
export class ChamadosComponent {
  chamados: ChamadoInterface[] = [
    {
      id: '1',
      nome: 'Heverton Andrade',
      descricao: 'Estou com problemas para ligar meu computador.',
      data: '10/04/2025',
      hora: '9:35',
      foto: 'https://angular-material.fusetheme.com/images/avatars/male-04.jpg'
    },
    {
      id: '2',
      nome: 'jackeline Silva',
      descricao: 'Estou com problemas para ligar meu computador.',
      data: '9/04/2025',
      hora: '9:35',
      foto: 'https://angular-material.fusetheme.com/images/avatars/male-04.jpg'
    },
    {
      id: '3',
      nome: 'Antonio Costa',
      descricao: 'Estou com problemas para ligar meu computador.',
      data: '7/04/2025',
      hora: '9:35',
      foto: 'https://angular-material.fusetheme.com/images/avatars/male-04.jpg'
    },
  ];

}
