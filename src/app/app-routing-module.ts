import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// import { HomeComponent } from "./learn-routing/home/home.component";
import { HomeComponent } from './learn-observables/home/home.component'
import { PageNotFoundComponent } from "./learn-routing/page-not-found/page-not-found.component";
import { EditServerComponent } from "./learn-routing/servers/edit-server/edit-server.component";
import { ServerComponent } from "./learn-routing/servers/server/server.component";
import { ServersComponent } from "./learn-routing/servers/servers.component";
import { UserComponent } from "./learn-routing/users/user/user.component";
import { UsersComponent } from "./learn-routing/users/users.component";
import { AuthGuard } from "./learn-routing/auth.guard.service";
import { CanDeactivateGuard } from "./learn-routing/servers/edit-server/can-deactivate-guard.service";

// const appRouters: Routes = [
//     { path: '', component: HomeComponent },
//     { path: 'users', component: UsersComponent, children: [
//       { path: ':id/:name', component: UserComponent }
//     ] },
//     { 
//       path: 'servers',
//       /*canActivate: [AuthGuard]*/
//       canActivateChild: [AuthGuard],
//       component: ServersComponent, 
//       children: [
//       { path: ':id', component: ServerComponent },
//       { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
//     ] },
//     { path: 'not-found', component: PageNotFoundComponent },
//     { path: '**', redirectTo: 'not-found', pathMatch: 'full' }

    
// ]

const appRouters: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/:id', component: UserComponent}

]



@NgModule({
    imports: [
        RouterModule.forRoot( appRouters ),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}