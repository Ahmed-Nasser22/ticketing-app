// ticket.model.ts
export interface Ticket {
    id: string;
    creationDateTime: string; // Assuming this will be represented as a string in ISO format
    phoneNumber: string;
    governorate: string;
    city: string;
    district: string;
    isHandled: boolean;
    status: TicketStatus;
  }
  
  export enum TicketStatus {
    New = 'New',
    Handled = 'Handled'
  }
  