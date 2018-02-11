import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
    {
        path: '',
        component: AppComponent
    },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
