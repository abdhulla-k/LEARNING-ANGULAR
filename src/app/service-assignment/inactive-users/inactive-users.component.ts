import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { UserService } from 'src/app/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  // @Input() users: string[];
  users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor( private userService: UserService ) { }

  ngOnInit(): void {
      this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.userService.onSetToActive(id)
  }
}
