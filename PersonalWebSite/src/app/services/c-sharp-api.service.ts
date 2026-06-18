// src/app/services/c-sharp-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RuntimeConfigService } from './runtime-config.service';

export interface AboutMe {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CSharpApiService {
  constructor(
    private http: HttpClient,
    private runtimeConfig: RuntimeConfigService
  ) {}

  private get apiUrl(): string {
    return `${this.runtimeConfig.apiBaseUrl}/api`;
  }

  getAboutMe(): Observable<AboutMe> {
    return this.http.get<AboutMe>(`${this.apiUrl}/AboutMe`);
  }
}