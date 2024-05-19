// ticket-list.component.ts

import { Component, OnInit } from '@angular/core';
import { TicketQueryService } from '../services/ticket-query.service'; // Import your ticket query service here
import { TicketService } from '../services/ticket.service'; // Import your ticket query service here
import { Ticket } from '../Models/ticket'; // Import the Ticket model

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = []; // Define an array to hold the tickets
  currentPage: number = 1;

  constructor(private ticketQueryService: TicketQueryService , private ticketService : TicketService) { } // Inject the TicketQueryService

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(): void {
    this.ticketQueryService.getTickets(this.currentPage).subscribe(
      (response: Ticket[]) => {
        this.tickets = response;
      },
      (error: any) => {
        console.error('Error fetching tickets:', error);
      }
    );
  }

  handleTicket(ticketId: string): void {
    this.ticketService.handleTicket(ticketId).subscribe(
      (response: Ticket) => {
        // Handle the ticket
        console.log('Ticket handled successfully:', response);
        // Refresh the ticket list after handling the ticket
        this.getTickets();
      },
      (error: any) => {
        console.error('Error handling ticket:', error);
      }
    );
  }

  nextPage(): void {
    this.currentPage++;
    this.getTickets();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getTickets();
    }}

  reloadTickets(): void {
    this.getTickets();
  }
  calculateTicketColor(creationDateTime: string): string {
    const creationTime = new Date(creationDateTime).getTime();
    const currentTime = new Date().getTime();
    const timeDifference = (currentTime - creationTime) / (1000 * 60); // Difference in minutes
    if (timeDifference-180 <= 15) { // substract 180 from the difference to get the local time and not utc
      return 'yellow';
    } else if (timeDifference-180 <= 30) {
      return 'green';
    } else if (timeDifference-180 <= 45) {
      return 'blue';
    } else {
      return 'red';
    }
  }
}
