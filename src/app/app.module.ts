import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { DrectivesStudyComponent } from './drectives-study/drectives-study.component';
import { BasicHighlightDirective } from './highlights/basic-higlight-directive';
import { BetterHighlightDirective } from './highlights/better-highlight.directive';
import { UnlessDirective } from './highlights/unless.directive';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { AccountService } from './accounts.service';
import { LoggingService } from './logging.service';
import { HomeComponent } from './learn-routing/home/home.component';
import { UsersComponent } from './learn-routing/users/users.component';
import { ServersComponent } from './learn-routing/servers/servers.component';
import { UserComponent } from './learn-routing/users/user/user.component';
import { EditServerComponent } from './learn-routing/servers/edit-server/edit-server.component';
import { ServerComponent } from './learn-routing/servers/server/server.component';
import { ServersService } from './learn-routing/servers/servers.service';
import { PageNotFoundComponent } from './learn-routing/page-not-found/page-not-found.component';
import { AppRoutingModule } from './learn-routing/app-routing-module';



@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    DrectivesStudyComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    NewAccountComponent,
    AccountComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AccountService,
    LoggingService,
    ServersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }