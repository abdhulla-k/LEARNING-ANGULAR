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

  onAddServer( value: HTMLInputElement ) {
    this.serverCreated.emit({
      serverName: value.name,
      serverContent: this.newServerContent
    })
  }

  onAddBlueprint(value: HTMLInputElement ) {
    this.blueprintCreated.emit({
      blueprintName: value.name,
      blueprintContent: this.newServerContent
    })
  }

}
