import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CSharpApiService } from '../../services/c-sharp-api.service';

interface AboutMe {
  name: string;
}

interface TechnicalGroup {
  category: string;
  skills: string[];
}

interface PerformanceMetric {
  value: string;
  metric: string;
  description: string;
}

@Component({
  selector: 'app-about-me-component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about-me-component.html',
  styleUrls: ['./about-me-component.scss']
})
export class AboutMeComponent implements OnInit, OnDestroy {
  name: string = 'M KARKI';
  title: string = 'Senior Full Stack Software Developer';
  location: string = 'Brampton, ON';
  
  summary: string = 'Senior Full Stack Software Developer with 7+ years of experience engineering high-performance web applications, scalable cloud services, and robust enterprise integrations. Specialized in the C# .NET and Angular/TypeScript ecosystems, with deep expertise in modernizing legacy architecture, defining backend design patterns, and bridging native environments with modern web tech.';

  metrics: PerformanceMetric[] = [
    { 
      value: '42%', 
      metric: 'UI Rendering Lift', 
      description: 'Achieved via comprehensive structural migration to modern Angular modules.' 
    },
    { 
      value: '55%', 
      metric: 'Latency Reduction', 
      description: 'Optimized high-concurrency transactional pipelines and ingestion mechanisms.' 
    },
    { 
      value: '65%', 
      metric: 'Deployment Stability', 
      description: 'Eliminated legacy pipeline errors by building secure, automated installers.' 
    }
  ];

  skillInventory: TechnicalGroup[] = [
    { 
      category: 'Core Stack', 
      skills: ['C# .NET Core', 'Angular (14+)', 'TypeScript', 'PostgreSQL', 'REST & SOAP APIs'] 
    },
    { 
      category: 'Native & Bridges', 
      skills: ['CEF (Chromium Embedded Framework)', 'Asynchronous IPC', 'WiX Toolset', 'C++', 'Java'] 
    },
    { 
      category: 'Ecosystem', 
      skills: ['Python', 'PHP', 'CakePHP', 'Git Pipeline Automation', 'Security Architecture'] 
    }
  ];

  profileData?: AboutMe;
  private destroy$ = new Subject<void>();

  constructor(private cSharpApiService: CSharpApiService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cSharpApiService.getAboutMe()
      .pipe(takeUntil(this.destroy$)) // Automatically unsubscribes when component is destroyed
      .subscribe({
        next: (data: AboutMe) => {
          console.log('Raw API Stream Data arrived:', data); // <-- Add this log
          // 2. Capture the data from the API response
          this.profileData = data;
          this.name = data?.name ?? this.name;
          // In case the HTTP callback executed outside Angular's change detection,
          // ensure the view is updated.
          try { this.cdr.detectChanges(); } catch (e) { /* noop */ }
        },
        error: (err) => {
          console.error('API Call Failed:', err);
        }
      });
   }

   ngOnDestroy(): void {
    // Triggers the unsubscription flow
    this.destroy$.next();
    this.destroy$.complete();
  }
}