import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './cliente/component/lista-clientes/lista-clientes.component';
import { ClientesPageComponent } from './cliente/page/clientes-page/clientes-page.component';
import { ClienteService } from './cliente/service/cliente.service';
import { UrlInterceptor } from './interceptors/UrlInterceptor';
import { DocumentoPipe } from './pipes/documento.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClientesPageComponent,
    ListaClientesComponent,
    DocumentoPipe
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    HttpClient,
    ClienteService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
