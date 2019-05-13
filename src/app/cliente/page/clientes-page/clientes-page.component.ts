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
    this.clienteService.obterClientes().subscribe(clientes => {
      this.clientes = clientes;
      console.log(clientes);
    });
  }
}
