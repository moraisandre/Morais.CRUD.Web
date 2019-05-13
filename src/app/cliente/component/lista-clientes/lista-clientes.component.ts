import { Component, OnInit, Input } from '@angular/core';
import { ClienteDTO } from '../../dto/cliente-dto';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  @Input() clientes: ClienteDTO;

  constructor() {}

  ngOnInit() {}
}
