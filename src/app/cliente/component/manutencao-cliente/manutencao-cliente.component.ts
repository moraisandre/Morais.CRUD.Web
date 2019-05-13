import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClienteDTO } from '../../dto/cliente-dto';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-manutencao-cliente',
  templateUrl: './manutencao-cliente.component.html',
  styleUrls: ['./manutencao-cliente.component.css']
})
export class ManutencaoClienteComponent implements OnInit {
  @Input() cliente: ClienteDTO;
  novoCliente = new ClienteDTO();

  @Output() voltar = new EventEmitter();

  // novoCliente = false;

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    if (this.cliente === undefined) {
      // this.novoCliente = true;
      this.cliente = new ClienteDTO();
    }
  }

  salvar() {
    this.clienteService.alterarCliente(this.cliente.Id, this.cliente);
  }

  voltarLista() {
    this.voltar.emit();
  }
}
