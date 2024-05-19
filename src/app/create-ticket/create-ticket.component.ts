// create-ticket.component.ts
import { Component } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { Ticket, TicketStatus } from '../Models/ticket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss'] 
})
export class CreateTicketComponent {
  ticketData: Ticket = { 
    id: '',
    creationDateTime: '', 
    phoneNumber: '',
    governorate: '',
    city: '',
    district: '',
    isHandled: false, 
    status: TicketStatus.New 
  };
  governorateOptions: string[] = ['Governorate1', 'Governorate2', 'Governorate3']; // Define static governorate options
  cityOptions: string[] = ['City1', 'City2', 'City3']; // Define static city options
  districtOptions: string[] = ['District1', 'District2', 'District3']; // Define static district options

  constructor(private ticketService: TicketService ,  private router: Router) { }

  createTicket(): void {
    this.ticketService.createTicket(this.ticketData).subscribe(
      response => {
        console.log('Ticket created successfully:', response);
        this.router.navigate(['/ticket-list']);

      },
      error => {
        console.error('Error creating ticket:', error);
      }
    );
  }
}
