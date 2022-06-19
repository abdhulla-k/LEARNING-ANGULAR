import { Component } from "@angular/core";

import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: []
})
export class HeaderComponent {
    constructor( private dataStorageService: DataStorageService ) {}
    // @Output() statusOutput = new EventEmitter<string>();
    // status: string;

    // onSelect( option: string ) {
    //     this.status = option;
    //     this.statusOutput.emit( this.status );
    // }

    onSaveData() {
        this.dataStorageService.storeRecipes()
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes()
    }
}