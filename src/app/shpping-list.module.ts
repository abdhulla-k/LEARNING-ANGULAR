import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppRouttingModule } from "./app-routing.module";

import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        CommonModule,
        AppRouttingModule,
        RouterModule.forChild( [{ path: 'shoppig-list', component: ShoppingListComponent }] ),
        FormsModule
    ]
})
export class ShoppingListModule {

}