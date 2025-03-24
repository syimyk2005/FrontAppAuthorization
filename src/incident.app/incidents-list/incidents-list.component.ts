import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../services/incident.service';
import { Incident } from '../model/incident.model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-incidents-list',
  templateUrl: './incidents-list.component.html',
  imports: [
    DatePipe
  ],
  styleUrls: ['./incidents-list.component.css']
})
export class IncidentsListComponent implements OnInit {
  incidents: Incident[] = [];
  modalContent: string = '';

  constructor(private incidentService: IncidentService, private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadIncidents();
  }

  loadIncidents(): void {
    this.incidentService.getIncidents().subscribe(data => {
      this.incidents = data;
    });
  }

  deleteIncident(id: number): void {
    if (confirm('Вы уверены, что хотите удалить инцидент?')) {
      this.incidentService.deleteIncident(id).subscribe(() => {
        this.loadIncidents();
      });
    }
  }

  openModal(content: string): void {
    this.modalContent = content;
    this.modalService.open('infoModal');
  }
}

