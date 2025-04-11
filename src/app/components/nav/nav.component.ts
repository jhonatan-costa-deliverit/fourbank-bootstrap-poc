import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {MenuItemsComponent} from './menu-items/menu-items.component';

@Component({
  selector: 'app-nav',
  imports: [NgOptimizedImage, MenuItemsComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  logout(): void {
    console.log('logout');
  }

}
