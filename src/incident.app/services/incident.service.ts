import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Incident } from "../model/incident.model";

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  private apiUrl = '/api/incidents';

  constructor(private http: HttpClient) {}

  getIncidents(): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.apiUrl);
  }

  deleteIncident(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
