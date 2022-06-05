import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';
// thsi component created to learn about services

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [ LoggingService ]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor( 
    private loggingServece: LoggingService,
    private accountService: AccountService ) {

  }


  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountService.updateStatus( this.id, status );
    //this.loggingServece.LogToConsole( status );
    this.accountService.statusUpdate.emit( status );
  }
}

