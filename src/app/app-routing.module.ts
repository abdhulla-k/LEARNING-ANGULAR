import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthModule } from "./auth/auth.module";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', 
        loadChildren: () => import('./recipes.module').then( m => m.RecipesModule ) 
    },
    {
        path: 'shoppig-list',
        loadChildren: () => import('./shopping-list/shpping-list.module').then( m => m.ShoppingListModule )
    },
    {
        path: 'auth',
        loadChildren: () => import( './auth/auth.module' ).then( m => AuthModule )
    }
]

@NgModule({
    imports: [ RouterModule.forRoot( appRoutes, { preloadingStrategy: PreloadAllModules } )],
    exports: [RouterModule]
})
export class AppRouttingModule {
    
}