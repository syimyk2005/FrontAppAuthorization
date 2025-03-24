import { HttpClientModule } from '@angular/common/http';
import { IncidentService } from './services/incident.service';
import {NgModule} from '@angular/core';

@NgModule({
  providers: [IncidentService],
  imports: [HttpClientModule],
})
export class AppModule {}
