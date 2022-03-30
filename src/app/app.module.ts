import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TaskModule } from './component/task.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { InboxScreenComponent } from './component/inbox-screen/inbox-screen.component';
import { PureInboxScreenComponent } from './component/inbox-screen/pure-inbox-screen.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, InboxScreenComponent, PureInboxScreenComponent],
  imports: [
    BrowserModule,
    TaskModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
