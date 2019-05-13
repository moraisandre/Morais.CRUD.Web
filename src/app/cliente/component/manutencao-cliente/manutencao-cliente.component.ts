import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClienteDTO } from '../../dto/cliente-dto';

@Component({
  selector: 'app-manutencao-cliente',
  templateUrl: './manutencao-cliente.component.html',
  styleUrls: ['./manutencao-cliente.component.css']
})
export class ManutencaoClienteComponent implements OnInit {
  @Input() cliente: ClienteDTO;

  @Output() voltar = new EventEmitter();

  novoCliente = false;

  constructor() { }

  ngOnInit() {
    if (this.cliente === undefined) {
      this.novoCliente = true;
      this.cliente = new ClienteDTO();
    }
  }

  salvar() {

  }

  voltarLista() {
    this.voltar.emit();
  }

}
