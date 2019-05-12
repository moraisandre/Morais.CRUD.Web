import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClientesPageComponent } from './cliente/page/clientes-page/clientes-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
