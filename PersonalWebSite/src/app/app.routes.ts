import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me-component/about-me-component';
import { LoginComponent } from './components/login-component/login-component';

export const routes: Routes = [
  { path: '', component: AboutMeComponent },        // Default Root View (Portfolio)
  { path: 'login', component: LoginComponent },     // Secure Gateway Component
  { path: '**', redirectTo: '' }                    // Fallback Wildcard Catch-All
];