import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: []
})
export class HeaderComponent implements OnInit, OnDestroy {
    private userSub: Subscription;
    isAuthenticated = false;

    constructor( 
        private dataStorageService: DataStorageService,
        private authService: AuthService ) {}
    // @Output() statusOutput = new EventEmitter<string>();
    // status: string;

    // onSelect( option: string ) {
    //     this.status = option;
    //     this.statusOutput.emit( this.status );
    // }

    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe( user =>
            this.isAuthenticated = !!user /* '!!' this is a method of writing if else*/ )
            console.log(this.isAuthenticated)
    }

    onSaveData() {
        this.dataStorageService.storeRecipes()
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe()
    }

    onLogout() {
        this.authService.logout();
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe()
    }
}