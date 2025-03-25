import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Добавляем CommonModule
import {IncidentService} from '../services/incident.service';
import {IncidentPerformance} from '../model/incident-performance.model';

@Component({
  selector: 'app-incident-list',
  standalone: true,
  imports: [CommonModule],  // Импортируем CommonModule для директив *ngIf и *ngFor
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss']
})
export class IncidentListComponent implements OnInit {
  incidents: IncidentPerformance[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private incidentService: IncidentService) {}

  ngOnInit(): void {
    this.incidentService.getIncidents().subscribe({
      next: (data) => {
        this.incidents = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Ошибка при загрузке данных';
        this.isLoading = false;
      }
    });
  }
}
