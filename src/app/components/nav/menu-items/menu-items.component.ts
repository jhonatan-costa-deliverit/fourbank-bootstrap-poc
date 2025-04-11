import {Component, EventEmitter, Output} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-menu-items',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss', '../../../shared/scss/hover-effects.scss']
})
export class MenuItemsComponent {
  @Output() logoutAction: EventEmitter<void> = new EventEmitter<void>();
}
