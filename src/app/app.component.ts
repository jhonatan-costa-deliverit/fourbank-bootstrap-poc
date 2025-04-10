import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NavComponent} from './components/nav/nav.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(protected router: Router) {}
}
