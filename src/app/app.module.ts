import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableGreenComponent } from './table-green/table-green.component';
import { TableBlueComponent } from './table-blue/table-blue.component';
import { TableRedComponent } from './table-red/table-red.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    TableGreenComponent,
    TableBlueComponent,
    TableRedComponent
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
