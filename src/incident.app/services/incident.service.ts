import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IncidentPerformance } from '../model/incident-performance.model'; // Укажите правильный путь!

@Injectable()
export class IncidentService {
  private apiUrl = 'http://localhost:8080/incidents/list'; // Укажите ваш API URL

  constructor(private http: HttpClient) {}

  getIncidents(): Observable<IncidentPerformance[]> {
    return this.http.get<IncidentPerformance[]>(this.apiUrl);
  }
}
