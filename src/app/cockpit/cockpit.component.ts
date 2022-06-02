import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter();
  @Output() blueprintCreated = new EventEmitter();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild( 'serverContentInput' ) serverDescription: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer( serverNameInput: HTMLInputElement ) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverDescription.nativeElement.value
    })
  }

  onAddBlueprint(blueprintNameInput: HTMLInputElement ) {
    this.blueprintCreated.emit({
      blueprintName: blueprintNameInput.value,
      blueprintContent: this.serverDescription.nativeElement.value
    })
  }

}
