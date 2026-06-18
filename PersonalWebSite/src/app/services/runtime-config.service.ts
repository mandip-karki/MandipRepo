import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface AppRuntimeConfig {
  services: {
    local: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class RuntimeConfigService {
  private config?: AppRuntimeConfig;

  constructor(private http: HttpClient) {}

  async load(): Promise<void> {
    this.config = await firstValueFrom(this.http.get<AppRuntimeConfig>('/api-endpoints.json'));
  }

  get apiBaseUrl(): string {
    return this.config?.services.local ?? '';
  }
}
