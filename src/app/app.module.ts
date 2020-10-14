import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TaskComponent } from './component/task/task.component';
import { ButtonComponent } from '../stories/button.component';
import { HeaderComponent } from '../stories/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ButtonComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
