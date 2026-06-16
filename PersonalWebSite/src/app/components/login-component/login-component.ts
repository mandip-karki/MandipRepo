import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void { }

  onExecutionSubmit(event: Event): void {
    event.preventDefault();
    // Verification operations / pipeline ingestion can safely step in here
    console.log('Secure entry authorization transaction dispatched.');
  }
}