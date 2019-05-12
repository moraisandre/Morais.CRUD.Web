import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClientesPageComponent } from './cliente/page/clientes-page/clientes-page.component';
import { UrlInterceptor } from './interceptors/UrlInterceptor';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ClienteService } from './cliente/service/cliente.service';

@NgModule({
  declarations: [AppComponent, ClientesPageComponent],
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
