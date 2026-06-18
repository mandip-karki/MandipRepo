import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

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

  load(): Promise<void> {
    return firstValueFrom(
      this.http.get<AppRuntimeConfig>('/api-endpoints.json').pipe(
        tap((config) => this.config = config),
        mapTo(void 0)
      )
    );
  }

  get apiBaseUrl(): string {
    return this.config?.services.local ?? '';
  }
}
