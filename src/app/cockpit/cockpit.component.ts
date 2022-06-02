import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter();
  @Output() blueprintCreated = new EventEmitter();
  //newServerName = '';
  newServerContent = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer( serverNameInput: HTMLInputElement ) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent
    })
  }

  onAddBlueprint(blueprintNameInput: HTMLInputElement ) {
    this.blueprintCreated.emit({
      blueprintName: blueprintNameInput.value,
      blueprintContent: this.newServerContent
    })
  }

}
