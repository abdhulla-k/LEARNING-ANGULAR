import { Incredient } from "../shared/incredient.model";

export class ShoppingListService {
    private incredients: Incredient[] = [
        new Incredient( 'Apple', 5 ),
        new Incredient( 'Tomate', 10 )
    ];

    getIngredients() {
        return this.incredients.slice(); // slice method will return a copy of incredients
    }

    ingredientAdded( ingredient: Incredient ) {
        this.incredients.push( ingredient );
    }
}