import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { RouterModule } from '@angular/router'; // Import RouterModule

@NgModule({
  declarations: [
    AppComponent,
    CreateTicketComponent,
    TicketListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,HttpClientModule ,RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
