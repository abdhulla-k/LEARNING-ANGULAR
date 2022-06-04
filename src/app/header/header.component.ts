import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: []
})
export class HeaderComponent {
    @Output() statusOutput = new EventEmitter<string>();
    status: string;

    onSelect( option: string ) {
        this.status = option;
        this.statusOutput.emit( this.status );
    }
}