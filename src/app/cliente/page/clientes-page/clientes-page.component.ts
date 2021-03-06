import { Component, OnInit } from '@angular/core';
import { ClienteDTO } from '../../dto/cliente-dto';
import { ClienteService } from '../../service/cliente.service';

enum ModoTela {
  Listar,
  Manutencao
}
@Component({
  selector: 'app-clientes-page',
  templateUrl: './clientes-page.component.html',
  styleUrls: ['./clientes-page.component.css']
})
export class ClientesPageComponent implements OnInit {
  cliente: ClienteDTO;
  clientes: ClienteDTO[];

  modo: ModoTela;
  ModoTela = ModoTela;

  public loading = false;


  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.modo = ModoTela.Listar;
    this.buscarClientes();
  }

  habilitarEdicaoCliente(cliente: ClienteDTO) {
    this.cliente = cliente;
    this.modo = ModoTela.Manutencao;
  }

  buscarClientes() {
    this.loading = true;
    this.clienteService.obterClientes().subscribe(clientes => {
      this.clientes = clientes;
      this.loading = false;
    });
  }

  mostrarLista() {
    this.modo = ModoTela.Listar;
    this.buscarClientes();
  }
}
