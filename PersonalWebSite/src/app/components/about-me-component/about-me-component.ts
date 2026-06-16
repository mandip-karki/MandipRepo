import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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
export class AboutMeComponent implements OnInit {
  name: string = 'MANDIP KARKI';
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

  constructor() { }

  ngOnInit(): void { }
}