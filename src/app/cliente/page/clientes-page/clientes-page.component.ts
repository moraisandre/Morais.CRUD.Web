import { Component, OnInit } from '@angular/core';
import { ClienteDTO } from '../../dto/cliente-dto';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-clientes-page',
  templateUrl: './clientes-page.component.html',
  styleUrls: ['./clientes-page.component.css']
})
export class ClientesPageComponent implements OnInit {
  cliente: ClienteDTO;
  clientes: ClienteDTO[];

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    // this.cliente.Documento = '387.600.268-77';

    this.clienteService.obterClientes().subscribe(clientes => {
      this.clientes = clientes;
      console.log(clientes);
    });
  }
}
