import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

import { Incredient } from "../shared/incredient.model";

export class ShoppingListService {
    ingredientChanged = new Subject();
    startedEditing = new Subject<number>();
    private incredients: Incredient[] = [
        new Incredient( 'Apple', 5 ),
        new Incredient( 'Tomate', 10 )
    ];

    getIngredients() {
        return this.incredients.slice(); // slice method will return a copy of incredients
    }

    addIngredient( ingredient: Incredient ) {
        this.incredients.push( ingredient );
        this.ingredientChanged.next( this.incredients.slice());
    }

    addIngredients( ingredients: Incredient[] ) {
        // for( let ingredient of ingredients ) {
        //     this.addIngredient( ingredient );
        // }
        this.incredients.push( ...ingredients );
        this.ingredientChanged.next( this.incredients.slice());
    }

    getIngredient( index: number ) {
        return this.incredients[index]
    }

    updateIngredient( index: number, ingredient: Incredient ) {
        this.incredients[index] = ingredient;
        this.ingredientChanged.next( this.incredients.slice() );
    }

    deleteIngredient( index: number ) {
        this.incredients.splice( index, 1 );
        this.ingredientChanged.next( this.incredients.slice() );
    }
}