import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClienteDTO } from '../../dto/cliente-dto';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  @Input() clientes: ClienteDTO[];
  @Output() editar = new EventEmitter<ClienteDTO>();
  @Output() recarregar = new EventEmitter();

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {}

  editarCliente(cliente: ClienteDTO) {
    this.editar.emit(cliente);
  }

  excluirCliente(id: string) {
    this.clienteService.deletarCliente(id).subscribe(() => this.recarregar.emit());
  }
}
