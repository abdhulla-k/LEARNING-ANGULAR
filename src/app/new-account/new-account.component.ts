import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

// thsi component created to learn about services
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [ LoggingService ]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor( private loggingService: LoggingService ) {

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.loggingService.LogToConsole( accountStatus );
  }
}