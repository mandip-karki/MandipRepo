import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.scss']
})
export class LoginComponent {
  constructor() { }

  onExecutionSubmit(event: Event): void {
    event.preventDefault();
    console.log('Secure entry authorization transaction dispatched.');
  }
}