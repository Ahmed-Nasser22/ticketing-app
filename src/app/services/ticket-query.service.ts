// ticket-query.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../Models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketQueryService {
  private apiUrl = 'http://localhost:5176/api/TicketsQuery';

  constructor(private http: HttpClient) { }

  getTickets(pageNumber: number = 1, pageSize: number = 5): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}
