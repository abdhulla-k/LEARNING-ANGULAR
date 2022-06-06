import { Incredient } from "../shared/incredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredient: Incredient[];

    constructor( name: string, description: string, imagePath: string, ingredient: Incredient[] ) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredient = ingredient;
    }
}