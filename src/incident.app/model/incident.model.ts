export interface Incident {
  id: number;
  happensDateAndTime: string;
  creatingDateAndTime: string;
  resourceUsed: string;
  incidentDescription: string;
  degreeOfImportant: string;
  responsible: string;
  status: string;
  closingDateAndTime?: string;
  decision?: string;
  note: string;
}
