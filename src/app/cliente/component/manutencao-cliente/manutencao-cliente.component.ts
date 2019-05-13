import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClienteDTO } from '../../dto/cliente-dto';
import { ClienteService } from '../../service/cliente.service';
import { TipoPessoa } from '../../enum/tipo-pessoa-enum';

@Component({
  selector: 'app-manutencao-cliente',
  templateUrl: './manutencao-cliente.component.html',
  styleUrls: ['./manutencao-cliente.component.css']
})
export class ManutencaoClienteComponent implements OnInit {
  @Input() cliente: ClienteDTO;
  criarCliente = new ClienteDTO();

  @Output() voltar = new EventEmitter();

  TipoPessoa = TipoPessoa;

  novoCliente = false;
  nomeDocumento = 'CPF';

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    if (this.cliente === undefined) {
      this.novoCliente = true;
      this.cliente = new ClienteDTO();
    }
    this.trocaTipoDocumento(false);
  }

  salvar() {
    this.clienteService
      .alterarCliente(this.cliente.Id, this.cliente)
      .subscribe(() => {
        this.voltarLista();
      });
  }

  criar() {
    this.clienteService.criarCliente(this.criarCliente).subscribe(() => {
      this.voltarLista();
    });
  }

  voltarLista() {
    this.voltar.emit();
  }

  trocaTipoDocumento(limpaCampo: boolean = true) {
    if (this.novoCliente) {
      if (this.criarCliente.TipoPessoa === TipoPessoa.PF) {
        this.nomeDocumento = 'CPF';
      } else {
        this.nomeDocumento = 'CNPJ';
      }
      if (limpaCampo) {
        this.criarCliente.Documento = '';
      }
    } else {
      if (this.cliente.TipoPessoa === TipoPessoa.PF) {
        this.nomeDocumento = 'CPF';
      } else {
        this.nomeDocumento = 'CNPJ';
      }
      if (limpaCampo) {
        this.cliente.Documento = '';
      }
    }
  }
}
