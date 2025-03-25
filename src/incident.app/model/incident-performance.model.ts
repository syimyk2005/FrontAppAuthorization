export interface IncidentPerformance {
  id: number;
  resourceUsed: string;
  creatingDateAndTime: string;
  happensDateAndTime: string;
  incidentDescription: string;
  degreeOfImportant: string;
  responsible: string;
  status: string;
  closingDateAndTime?: string;
  decision?: string;
  note?: string;
}

