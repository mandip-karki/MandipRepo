// src/app/services/c-sharp-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AboutMe {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CSharpApiService {
  private apiUrl = 'http://localhost:82/api'; 

  constructor(private http: HttpClient) { }

  // CRITICAL: Ensure <AboutMe> is explicitly declared on the .get call
  getAboutMe(): Observable<AboutMe> {
    return this.http.get<AboutMe>(`${this.apiUrl}/AboutMe`);
  }
}