import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteDTO } from '../dto/cliente-dto';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
@Injectable()
export class ClienteService {
  constructor(private http: HttpClient) {}

  obterClientes(): Observable<ClienteDTO[]> {
    return this.http.get<ClienteDTO[]>(`cliente/clientes`);
  }

  obterCliente(id: string): Observable<ClienteDTO> {
    return this.http.get<ClienteDTO>(`cliente/clientes/${id}`);
  }

  criarCliente(cliente: ClienteDTO): Observable<ClienteDTO> {
    return this.http.post<ClienteDTO>(`cliente/clientes`, cliente);
  }

  alterarCliente(id: string, cliente: ClienteDTO): Observable<ClienteDTO> {
    return this.http.put<ClienteDTO>(`cliente/clientes/${id}`, cliente);
  }

  deletarCliente(id: string): Observable<boolean> {
    return this.http
      .delete(`cliente/clientes/${id}`, { observe: 'response' })
      .pipe(map(response => response.status === 204));
  }
}
