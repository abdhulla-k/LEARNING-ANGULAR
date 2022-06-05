import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';

// thsi component created to learn about services
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [ LoggingService ]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor( 
    private loggingService: LoggingService, 
    private accountService: AccountService ) {

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount( accountName, accountStatus );
    this.loggingService.LogToConsole( accountStatus );
  }
}