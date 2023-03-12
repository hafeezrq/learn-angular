import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './basics/servers/servers.component';
import { ServerComponent } from './basics/server/server.component';
import { SuccessAlertComponent } from './basics/assignments/assignment1/success-alert/success-alert.component';
import { WarningAlertComponent } from './basics/assignments/assignment1/warning-alert/warning-alert.component';
import { UserComponent } from './basics/assignments/assignment2/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
