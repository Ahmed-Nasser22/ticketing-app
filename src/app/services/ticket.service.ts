// ticket.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../Models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://localhost:5176/api/TicketsCommand';

  constructor(private http: HttpClient) { }

  createTicket(ticketData: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.apiUrl, ticketData);
  }

  handleTicket(ticketId: string): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.apiUrl}/handle/${ticketId}`, {});
  }
}
