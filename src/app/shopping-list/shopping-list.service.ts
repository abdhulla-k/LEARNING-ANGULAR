import { EventEmitter } from "@angular/core";
import { Incredient } from "../shared/incredient.model";

export class ShoppingListService {
    ingredientChanged = new EventEmitter();
    private incredients: Incredient[] = [
        new Incredient( 'Apple', 5 ),
        new Incredient( 'Tomate', 10 )
    ];

    getIngredients() {
        return this.incredients.slice(); // slice method will return a copy of incredients
    }

    addIngredient( ingredient: Incredient ) {
        this.incredients.push( ingredient );
        this.ingredientChanged.emit( this.incredients.slice());
    }
}