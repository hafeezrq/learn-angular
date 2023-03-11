import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './basics/servers/servers.component';
import { ServerComponent } from './basics/server/server.component';
import { SuccessAlertComponent } from './basics/assignment/success-alert/success-alert.component';
import { WarningAlertComponent } from './basics/assignment/warning-alert/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
