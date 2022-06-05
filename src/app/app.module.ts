import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


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
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    AccountService,
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }